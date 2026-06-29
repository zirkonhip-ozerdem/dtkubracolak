"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { LockKeyhole, LogIn, Mail } from "lucide-react";

type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: { message: string } };

export function AdminLoginPage() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (!email.trim() || !password.trim()) {
      setError("E-posta ve şifre zorunludur.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/admin/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ email, password, remember }),
      });
      const result = (await response.json()) as ApiResponse<{ csrfToken: string }>;

      if (!response.ok || !result.success) {
        setError(result.success ? "Giriş başarısız." : result.error.message);
        return;
      }

      window.localStorage.setItem("dtkc_admin_csrf", result.data.csrfToken);
      router.push("/admin");
      router.refresh();
    } catch {
      setError("Sunucuya ulaşılamadı. Veritabanı ayarlarını kontrol edin.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative grid min-h-svh overflow-hidden bg-[#f7f4ef] lg:grid-cols-[minmax(360px,0.78fr)_1fr]">
      <div className="absolute inset-x-0 top-0 h-56 overflow-hidden bg-[#f7f4ef] sm:h-72 lg:hidden">
        <Image
          src="/images/site/clinic-room.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-[#f7f4ef]/70 to-[#f7f4ef]" />
      </div>

      <div className="relative z-10 flex min-h-svh flex-col justify-between px-5 py-6 sm:px-8 sm:py-8 lg:bg-[#f7f4ef]/95 lg:px-12">
        <div className="flex justify-center sm:justify-start">
          <Image
            src="/images/site/KUBRA_COLAK_LOGO_ONAY_TRANSPARENT.png"
            alt="Dt. Kübra Çolak"
            width={540}
            height={204}
            priority
            className="h-28 w-auto max-w-full object-contain sm:h-36 lg:h-48"
          />
        </div>

        <div className="mx-auto mt-4 w-full max-w-md border border-white/70 bg-[#f7f4ef]/92 p-5 shadow-[0_18px_45px_rgba(43,38,31,0.08)] backdrop-blur sm:mt-8 sm:p-7 lg:mt-0 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c9a36d]">
            Admin Panel
          </p>
          <h1 className="mt-4 text-2xl font-semibold text-[#252525] sm:text-3xl">
            Yönetim paneline giriş
          </h1>
          <p className="mt-3 text-sm leading-6 text-[#6a625b]">
            İçerik yönetimi, medya yükleme ve çok dilli kayıt işlemleri için giriş yapın.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[#5d5751]">
                E-posta
              </span>
              <span className="flex items-center border border-[#ddd4c9] bg-white px-4">
                <Mail className="h-4 w-4 text-[#c9a36d]" />
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  className="h-12 w-full bg-transparent px-3 text-sm text-[#252525] outline-none"
                  placeholder="admin@dtkubracolak.com"
                />
              </span>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[#5d5751]">
                Şifre
              </span>
              <span className="flex items-center border border-[#ddd4c9] bg-white px-4">
                <LockKeyhole className="h-4 w-4 text-[#c9a36d]" />
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  className="h-12 w-full bg-transparent px-3 text-sm text-[#252525] outline-none"
                  placeholder="••••••••"
                />
              </span>
            </label>

            <label className="flex items-center gap-3 text-sm text-[#5d5751]">
              <input
                type="checkbox"
                checked={remember}
                onChange={(event) => setRemember(event.target.checked)}
                className="h-4 w-4 accent-[#c9a36d]"
              />
              Beni hatırla
            </label>

            {error ? (
              <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading}
              className="inline-flex h-12 w-full items-center justify-center gap-2 bg-[#252525] px-5 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#c9a36d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <LogIn className="h-4 w-4" />
              {loading ? "Giriş yapılıyor" : "Giriş yap"}
            </button>
          </form>
        </div>

        <p className="text-xs text-[#9a8e84]">
          © {currentYear} Dt. Kübra Çolak websitesi içerik yönetim sistemi
        </p>
      </div>

      <div className="relative hidden overflow-hidden bg-[#f7f4ef] lg:block">
        <Image
          src="/images/site/clinic-room.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover object-center opacity-55"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4ef] via-[#f7f4ef]/48 to-transparent" />
        <div className="absolute inset-0 bg-white/18" />
      </div>
    </section>
  );
}
