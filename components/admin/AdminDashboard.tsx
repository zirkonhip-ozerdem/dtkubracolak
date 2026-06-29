"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import {
  BookOpen,
  FolderTree,
  HelpCircle,
  Images,
  LayoutDashboard,
  LogOut,
  Settings,
  Stethoscope,
  Upload,
} from "lucide-react";
import { AdminField, AdminResourcePanel } from "@/components/admin/AdminResourcePanel";

type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: { message: string } };

type AdminSession = {
  admin: {
    email: string;
    name: string;
    role: string;
  };
  csrfToken: string;
};

type TabKey = "overview" | "categories" | "treatments" | "faqs" | "blog" | "gallery" | "settings" | "media";

const tabs: Array<{ key: TabKey; label: string; icon: typeof LayoutDashboard }> = [
  { key: "overview", label: "Özet", icon: LayoutDashboard },
  { key: "categories", label: "Kategoriler", icon: FolderTree },
  { key: "treatments", label: "Tedaviler", icon: Stethoscope },
  { key: "faqs", label: "SSS", icon: HelpCircle },
  { key: "blog", label: "Blog", icon: BookOpen },
  { key: "gallery", label: "Galeri", icon: Images },
  { key: "settings", label: "Ayarlar", icon: Settings },
  { key: "media", label: "Medya", icon: Upload },
];

const statusOptions = [
  { label: "Taslak", value: "DRAFT" },
  { label: "Yayında", value: "PUBLISHED" },
  { label: "Arşiv", value: "ARCHIVED" },
];

const categoryFields: AdminField[] = [
  { key: "slug", label: "Slug", required: true },
  { key: "nameTr", label: "Ad TR", required: true },
  { key: "nameEn", label: "Ad EN", required: true },
  { key: "nameDe", label: "Ad DE", required: true },
  { key: "imageUrl", label: "Görsel URL" },
  { key: "sortOrder", label: "Sıra", type: "number" },
  { key: "isActive", label: "Durum", type: "checkbox" },
];

const treatmentFields: AdminField[] = [
  { key: "categoryId", label: "Kategori ID", type: "number", required: true },
  { key: "slug", label: "Slug", required: true },
  { key: "nameTr", label: "Ad TR", required: true },
  { key: "nameEn", label: "Ad EN", required: true },
  { key: "nameDe", label: "Ad DE", required: true },
  { key: "leadTr", label: "Hero Kısa Açıklama TR", type: "textarea" },
  { key: "leadEn", label: "Hero Kısa Açıklama EN", type: "textarea" },
  { key: "leadDe", label: "Hero Kısa Açıklama DE", type: "textarea" },
  { key: "introTr", label: "İçerik TR", type: "textarea" },
  { key: "introEn", label: "İçerik EN", type: "textarea" },
  { key: "introDe", label: "İçerik DE", type: "textarea" },
  { key: "imageUrl", label: "Görsel URL" },
  { key: "videoUrl", label: "Video URL" },
  { key: "status", label: "Durum", type: "select", options: statusOptions },
  { key: "sortOrder", label: "Sıra", type: "number" },
  { key: "isFeatured", label: "Öne çıkan", type: "checkbox" },
  { key: "isActive", label: "Aktif", type: "checkbox" },
];

const faqFields: AdminField[] = [
  { key: "questionTr", label: "Soru TR", required: true },
  { key: "questionEn", label: "Soru EN" },
  { key: "questionDe", label: "Soru DE" },
  { key: "answerTr", label: "Cevap TR", type: "textarea", required: true },
  { key: "answerEn", label: "Cevap EN", type: "textarea" },
  { key: "answerDe", label: "Cevap DE", type: "textarea" },
  { key: "sortOrder", label: "Sıra", type: "number" },
  { key: "isActive", label: "Aktif", type: "checkbox" },
];

const blogFields: AdminField[] = [
  { key: "titleTr", label: "Başlık TR", required: true },
  { key: "titleEn", label: "Başlık EN" },
  { key: "titleDe", label: "Başlık DE" },
  { key: "slugTr", label: "Slug TR", required: true },
  { key: "slugEn", label: "Slug EN" },
  { key: "slugDe", label: "Slug DE" },
  { key: "excerptTr", label: "Özet TR", type: "textarea", required: true },
  { key: "excerptEn", label: "Özet EN", type: "textarea" },
  { key: "excerptDe", label: "Özet DE", type: "textarea" },
  { key: "contentTr", label: "İçerik TR", type: "textarea", required: true },
  { key: "contentEn", label: "İçerik EN", type: "textarea" },
  { key: "contentDe", label: "İçerik DE", type: "textarea" },
  { key: "imageUrl", label: "Görsel URL", required: true },
  { key: "status", label: "Durum", type: "select", options: statusOptions },
  { key: "isActive", label: "Aktif", type: "checkbox" },
];

const galleryFields: AdminField[] = [
  { key: "titleTr", label: "Başlık TR" },
  { key: "titleEn", label: "Başlık EN" },
  { key: "titleDe", label: "Başlık DE" },
  { key: "imageUrl", label: "Görsel URL", required: true },
  { key: "imageAltTr", label: "Alt TR" },
  { key: "imageAltEn", label: "Alt EN" },
  { key: "imageAltDe", label: "Alt DE" },
  { key: "sortOrder", label: "Sıra", type: "number" },
  { key: "isActive", label: "Aktif", type: "checkbox" },
];

export function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [session, setSession] = useState<AdminSession | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSession() {
      try {
        const response = await fetch("/api/admin/auth/me", { credentials: "include" });
        const result = (await response.json()) as ApiResponse<AdminSession>;
        if (!response.ok || !result.success) {
          router.replace("/admin/login");
          return;
        }
        window.localStorage.setItem("dtkc_admin_csrf", result.data.csrfToken);
        setSession(result.data);
      } catch {
        router.replace("/admin/login");
      } finally {
        setLoading(false);
      }
    }

    void loadSession();
  }, [router]);

  async function logout() {
    const csrfToken = window.localStorage.getItem("dtkc_admin_csrf") || session?.csrfToken || "";
    await fetch("/api/admin/auth/logout", {
      method: "POST",
      headers: { "x-csrf-token": csrfToken },
      credentials: "include",
    });
    window.localStorage.removeItem("dtkc_admin_csrf");
    router.replace("/admin/login");
  }

  const csrfToken = session?.csrfToken || "";

  if (loading) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-[#f7f4ef] px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#5d5751]">Admin panel yükleniyor</p>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#f7f4ef]">
      <aside className="fixed inset-y-0 left-0 hidden w-72 border-r border-[#eee8df] bg-white lg:flex lg:flex-col">
        <div className="border-b border-[#eee8df] px-6 py-6">
          <Image
            src="/images/site/KUBRA_COLAK_LOGO_ONAY.png"
            alt="Dt. Kübra Çolak"
            width={160}
            height={60}
            className="h-14 w-auto object-contain"
            priority
          />
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.22em] text-[#c9a36d]">
            İçerik Yönetimi
          </p>
        </div>

        <nav className="flex-1 space-y-1 px-3 py-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`flex h-11 w-full items-center gap-3 px-3 text-left text-sm font-semibold transition ${
                  active ? "bg-[#252525] text-white" : "text-[#5d5751] hover:bg-[#fbfaf8] hover:text-[#252525]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </nav>

        <div className="border-t border-[#eee8df] p-4">
          <p className="text-sm font-semibold text-[#252525]">{session?.admin.name}</p>
          <p className="mt-1 text-xs text-[#9a8e84]">{session?.admin.email}</p>
          <button
            type="button"
            onClick={() => void logout()}
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 border border-[#ddd4c9] text-xs font-bold uppercase tracking-[0.12em] text-[#5d5751] hover:border-[#c9a36d] hover:text-[#c9a36d]"
          >
            <LogOut className="h-4 w-4" />
            Çıkış
          </button>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-[#eee8df] bg-white/95 px-6 py-4 backdrop-blur lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a36d]">Admin Panel</p>
              <h1 className="mt-1 text-2xl font-semibold text-[#252525]">{tabs.find((tab) => tab.key === activeTab)?.label}</h1>
            </div>
            <div className="flex flex-wrap gap-2 lg:hidden">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`h-9 px-3 text-xs font-bold uppercase tracking-[0.1em] ${
                    activeTab === tab.key ? "bg-[#252525] text-white" : "border border-[#ddd4c9] bg-white text-[#5d5751]"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <main className="px-6 py-8 lg:px-8">
          {activeTab === "overview" ? <Overview /> : null}
          {activeTab === "categories" ? (
            <AdminResourcePanel
              title="Tedavi kategorileri"
              description="Tedavi menüsünün kategori başlıklarını ve sıralamasını yönetin."
              endpoint="/api/admin/treatment-categories"
              csrfToken={csrfToken}
              fields={categoryFields}
              primaryField="nameTr"
            />
          ) : null}
          {activeTab === "treatments" ? (
            <AdminResourcePanel
              title="Tedaviler"
              description="Çok dilli tedavi kayıtlarını, görsellerini, draft/yayın durumunu ve sıralamasını yönetin."
              endpoint="/api/admin/treatments"
              csrfToken={csrfToken}
              fields={treatmentFields}
              primaryField="nameTr"
            />
          ) : null}
          {activeTab === "faqs" ? (
            <AdminResourcePanel
              title="Sıkça sorulan sorular"
              description="SSS kayıtlarını üç dilde yönetin."
              endpoint="/api/admin/faqs"
              csrfToken={csrfToken}
              fields={faqFields}
              primaryField="questionTr"
            />
          ) : null}
          {activeTab === "blog" ? (
            <AdminResourcePanel
              title="Blog yazıları"
              description="Blog yazılarını taslak, yayın ve arşiv durumlarıyla yönetin."
              endpoint="/api/admin/blog-posts"
              csrfToken={csrfToken}
              fields={blogFields}
              primaryField="titleTr"
            />
          ) : null}
          {activeTab === "gallery" ? (
            <AdminResourcePanel
              title="Galeri"
              description="Galeri görsellerini ve çok dilli alt metinlerini yönetin."
              endpoint="/api/admin/gallery"
              csrfToken={csrfToken}
              fields={galleryFields}
              primaryField="titleTr"
            />
          ) : null}
          {activeTab === "settings" ? <SiteSettingsPanel csrfToken={csrfToken} /> : null}
          {activeTab === "media" ? <MediaUploadPanel csrfToken={csrfToken} /> : null}
        </main>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {tabs.slice(1).map((tab) => {
        const Icon = tab.icon;
        return (
          <div key={tab.key} className="border border-[#eee8df] bg-white p-5">
            <Icon className="h-5 w-5 text-[#c9a36d]" />
            <h2 className="mt-4 text-base font-semibold text-[#252525]">{tab.label}</h2>
            <p className="mt-2 text-sm leading-6 text-[#6a625b]">
              Bu modül admin API üzerinden yönetilir. Public site şu an statik veriyi kullanmaya devam eder.
            </p>
          </div>
        );
      })}
      <Link
        href="/tr"
        className="inline-flex h-11 items-center justify-center border border-[#ddd4c9] bg-white px-4 text-xs font-bold uppercase tracking-[0.14em] text-[#5d5751] hover:border-[#c9a36d] hover:text-[#c9a36d] md:col-span-2 xl:col-span-4"
      >
        Siteyi görüntüle
      </Link>
    </div>
  );
}

function SiteSettingsPanel({ csrfToken }: { csrfToken: string }) {
  const [form, setForm] = useState({
    siteName: "Dt. Kübra Çolak",
    email: "",
    phone: "",
    addressTr: "",
    addressEn: "",
    addressDe: "",
    whatsappPhone: "",
    instagramUrl: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadSettings() {
      try {
        const response = await fetch("/api/admin/site-settings", { credentials: "include" });
        const result = (await response.json()) as ApiResponse<Record<string, string | null>>;
        if (response.ok && result.success && result.data) {
          setForm((prev) => ({
            ...prev,
            ...Object.fromEntries(Object.entries(result.data).map(([key, value]) => [key, value ?? ""])),
          }));
        }
      } catch {
        setError("Ayarlar yüklenemedi.");
      }
    }
    void loadSettings();
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");
    try {
      const response = await fetch("/api/admin/site-settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json", "x-csrf-token": csrfToken },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as ApiResponse<unknown>;
      if (!response.ok || !result.success) {
        setError(result.success ? "Ayarlar kaydedilemedi." : result.error.message);
        return;
      }
      setMessage("Site ayarları kaydedildi.");
    } catch {
      setError("Ayarlar kaydedilemedi.");
    }
  }

  return (
    <section className="max-w-3xl border border-[#eee8df] bg-white p-5">
      <h2 className="text-lg font-semibold text-[#252525]">Site ayarları</h2>
      <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
        {Object.keys(form).map((key) => (
          <label key={key} className={key.startsWith("address") ? "md:col-span-2" : ""}>
            <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#5d5751]">
              {key}
            </span>
            <input
              value={form[key as keyof typeof form]}
              onChange={(event) => setForm((prev) => ({ ...prev, [key]: event.target.value }))}
              className="h-11 w-full border border-[#ddd4c9] bg-[#fbfaf8] px-3 text-sm text-[#252525] outline-none focus:border-[#c9a36d]"
            />
          </label>
        ))}
        {error ? <p className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700 md:col-span-2">{error}</p> : null}
        {message ? <p className="border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700 md:col-span-2">{message}</p> : null}
        <button className="h-11 bg-[#252525] px-4 text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-[#c9a36d] md:col-span-2">
          Ayarları kaydet
        </button>
      </form>
    </section>
  );
}

function MediaUploadPanel({ csrfToken }: { csrfToken: string }) {
  const [folder, setFolder] = useState("GALLERY");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    if (!file) {
      setError("Bir görsel seçmelisiniz.");
      return;
    }

    const formData = new FormData();
    formData.set("folder", folder);
    formData.set("file", file);

    try {
      const response = await fetch("/api/admin/media", {
        method: "POST",
        headers: { "x-csrf-token": csrfToken },
        credentials: "include",
        body: formData,
      });
      const result = (await response.json()) as ApiResponse<{ url?: string }>;
      if (!response.ok || !result.success) {
        setError(result.success ? "Yükleme başarısız." : result.error.message);
        return;
      }
      setMessage(`Görsel yüklendi: ${result.data.url || ""}`);
      setFile(null);
    } catch {
      setError("Yükleme tamamlanamadı.");
    }
  }

  return (
    <section className="max-w-xl border border-[#eee8df] bg-white p-5">
      <h2 className="text-lg font-semibold text-[#252525]">Medya yükleme</h2>
      <p className="mt-2 text-sm leading-6 text-[#6a625b]">
        Görseller WebP olarak optimize edilir ve public uploads klasörüne yazılır.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <label className="block">
          <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#5d5751]">Klasör</span>
          <select
            value={folder}
            onChange={(event) => setFolder(event.target.value)}
            className="h-11 w-full border border-[#ddd4c9] bg-[#fbfaf8] px-3 text-sm text-[#252525] outline-none focus:border-[#c9a36d]"
          >
            {["CATEGORIES", "TREATMENTS", "BLOG", "GALLERY", "SITE"].map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#5d5751]">Görsel</span>
          <input
            type="file"
            accept="image/*"
            onChange={(event) => setFile(event.target.files?.[0] || null)}
            className="w-full border border-[#ddd4c9] bg-[#fbfaf8] px-3 py-3 text-sm text-[#252525]"
          />
        </label>
        {error ? <p className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
        {message ? <p className="border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">{message}</p> : null}
        <button className="inline-flex h-11 w-full items-center justify-center gap-2 bg-[#252525] px-4 text-xs font-bold uppercase tracking-[0.14em] text-white hover:bg-[#c9a36d]">
          <Upload className="h-4 w-4" />
          Yükle
        </button>
      </form>
    </section>
  );
}
