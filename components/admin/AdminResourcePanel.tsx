"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Edit3, Plus, RefreshCw, Save, Trash2, X } from "lucide-react";

export type AdminField = {
  key: string;
  label: string;
  type?: "text" | "textarea" | "number" | "checkbox" | "select";
  required?: boolean;
  options?: Array<{ label: string; value: string }>;
};

type ApiResponse<T> =
  | { success: true; data: T }
  | { success: false; error: { message: string } };

type AdminResourcePanelProps = {
  title: string;
  description: string;
  endpoint: string;
  csrfToken: string;
  fields: AdminField[];
  primaryField: string;
};

type ResourceRecord = Record<string, unknown> & { id?: number };

export function AdminResourcePanel({
  title,
  description,
  endpoint,
  csrfToken,
  fields,
  primaryField,
}: AdminResourcePanelProps) {
  const emptyForm = useMemo(
    () =>
      fields.reduce<Record<string, string | boolean>>((acc, field) => {
        acc[field.key] = field.type === "checkbox" ? true : "";
        return acc;
      }, {}),
    [fields],
  );
  const [items, setItems] = useState<ResourceRecord[]>([]);
  const [form, setForm] = useState<Record<string, string | boolean>>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function loadItems() {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(endpoint, { credentials: "include" });
      const result = (await response.json()) as ApiResponse<ResourceRecord[]>;
      if (!response.ok || !result.success) {
        setError(result.success ? "Kayıtlar alınamadı." : result.error.message);
        return;
      }
      setItems(result.data);
    } catch {
      setError("Kayıtlar yüklenemedi.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    let ignore = false;

    fetch(endpoint, { credentials: "include" })
      .then(async (response) => {
        const result = (await response.json()) as ApiResponse<ResourceRecord[]>;
        if (ignore) return;
        if (!response.ok || !result.success) {
          setError(result.success ? "Kayıtlar alınamadı." : result.error.message);
          return;
        }
        setItems(result.data);
      })
      .catch(() => {
        if (!ignore) setError("Kayıtlar yüklenemedi.");
      })
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [endpoint]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setMessage("");

    const method = editingId ? "PATCH" : "POST";
    const url = editingId ? `${endpoint}/${editingId}` : endpoint;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-csrf-token": csrfToken,
        },
        credentials: "include",
        body: JSON.stringify(form),
      });
      const result = (await response.json()) as ApiResponse<ResourceRecord>;
      if (!response.ok || !result.success) {
        setError(result.success ? "Kayıt işlemi başarısız." : result.error.message);
        return;
      }

      setMessage(editingId ? "Kayıt güncellendi." : "Yeni kayıt eklendi.");
      setEditingId(null);
      setForm(emptyForm);
      await loadItems();
    } catch {
      setError("Kayıt işlemi tamamlanamadı.");
    }
  }

  async function handleDelete(id: number) {
    setError("");
    setMessage("");

    const confirmed = window.confirm("Bu kaydı silmek istediğinize emin misiniz?");
    if (!confirmed) return;

    try {
      const response = await fetch(`${endpoint}/${id}`, {
        method: "DELETE",
        headers: { "x-csrf-token": csrfToken },
        credentials: "include",
      });

      if (!response.ok && response.status !== 204) {
        const result = (await response.json()) as ApiResponse<unknown>;
        setError(result.success ? "Silme işlemi başarısız." : result.error.message);
        return;
      }

      setMessage("Kayıt silindi.");
      await loadItems();
    } catch {
      setError("Silme işlemi tamamlanamadı.");
    }
  }

  function startEdit(item: ResourceRecord) {
    setEditingId(typeof item.id === "number" ? item.id : null);
    setForm(
      fields.reduce<Record<string, string | boolean>>((acc, field) => {
        const value = item[field.key];
        acc[field.key] = field.type === "checkbox" ? Boolean(value) : value == null ? "" : String(value);
        return acc;
      }, {}),
    );
  }

  function resetForm() {
    setEditingId(null);
    setForm(emptyForm);
    setError("");
    setMessage("");
  }

  return (
    <section className="grid gap-6 xl:grid-cols-[420px_1fr]">
      <div className="border border-[#eee8df] bg-white p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-[#252525]">{title}</h2>
            <p className="mt-1 text-sm leading-6 text-[#6a625b]">{description}</p>
          </div>
          {editingId ? (
            <button
              type="button"
              onClick={resetForm}
              className="flex h-9 w-9 items-center justify-center border border-[#eee8df] text-[#5d5751] hover:text-[#c9a36d]"
              aria-label="Formu temizle"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {fields.map((field) => (
            <label key={field.key} className="block">
              <span className="mb-2 block text-[11px] font-bold uppercase tracking-[0.14em] text-[#5d5751]">
                {field.label}
              </span>
              {field.type === "textarea" ? (
                <textarea
                  value={String(form[field.key] ?? "")}
                  onChange={(event) => setForm((prev) => ({ ...prev, [field.key]: event.target.value }))}
                  required={field.required}
                  rows={4}
                  className="w-full border border-[#ddd4c9] bg-[#fbfaf8] px-3 py-2 text-sm text-[#252525] outline-none focus:border-[#c9a36d]"
                />
              ) : field.type === "checkbox" ? (
                <span className="flex h-11 items-center gap-3 border border-[#ddd4c9] bg-[#fbfaf8] px-3 text-sm text-[#252525]">
                  <input
                    type="checkbox"
                    checked={Boolean(form[field.key])}
                    onChange={(event) => setForm((prev) => ({ ...prev, [field.key]: event.target.checked }))}
                    className="h-4 w-4 accent-[#c9a36d]"
                  />
                  Aktif
                </span>
              ) : field.type === "select" ? (
                <select
                  value={String(form[field.key] ?? "")}
                  onChange={(event) => setForm((prev) => ({ ...prev, [field.key]: event.target.value }))}
                  required={field.required}
                  className="h-11 w-full border border-[#ddd4c9] bg-[#fbfaf8] px-3 text-sm text-[#252525] outline-none focus:border-[#c9a36d]"
                >
                  <option value="">Seçiniz</option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || "text"}
                  value={String(form[field.key] ?? "")}
                  onChange={(event) => setForm((prev) => ({ ...prev, [field.key]: event.target.value }))}
                  required={field.required}
                  className="h-11 w-full border border-[#ddd4c9] bg-[#fbfaf8] px-3 text-sm text-[#252525] outline-none focus:border-[#c9a36d]"
                />
              )}
            </label>
          ))}

          {error ? <p className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">{error}</p> : null}
          {message ? <p className="border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">{message}</p> : null}

          <button
            type="submit"
            className="inline-flex h-11 w-full items-center justify-center gap-2 bg-[#252525] px-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#c9a36d]"
          >
            {editingId ? <Save className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {editingId ? "Güncelle" : "Yeni kayıt"}
          </button>
        </form>
      </div>

      <div className="border border-[#eee8df] bg-white">
        <div className="flex items-center justify-between border-b border-[#eee8df] px-5 py-4">
          <p className="text-sm font-semibold text-[#252525]">{items.length} kayıt</p>
          <button
            type="button"
            onClick={() => void loadItems()}
            className="inline-flex h-9 items-center gap-2 border border-[#ddd4c9] px-3 text-xs font-bold uppercase tracking-[0.12em] text-[#5d5751] hover:border-[#c9a36d] hover:text-[#c9a36d]"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Yenile
          </button>
        </div>

        <div className="max-h-[720px] overflow-auto">
          {loading ? (
            <p className="px-5 py-6 text-sm text-[#6a625b]">Yükleniyor...</p>
          ) : items.length === 0 ? (
            <p className="px-5 py-6 text-sm text-[#6a625b]">Henüz kayıt yok.</p>
          ) : (
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-[#fbfaf8] text-[11px] uppercase tracking-[0.14em] text-[#5d5751]">
                <tr>
                  <th className="px-5 py-3">Kayıt</th>
                  <th className="px-5 py-3">Durum</th>
                  <th className="px-5 py-3">Sıra</th>
                  <th className="px-5 py-3 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-t border-[#eee8df]">
                    <td className="px-5 py-4">
                      <p className="font-medium text-[#252525]">{String(item[primaryField] || item.slug || `#${item.id}`)}</p>
                      <p className="mt-1 text-xs text-[#9a8e84]">ID: {item.id}</p>
                    </td>
                    <td className="px-5 py-4 text-[#5d5751]">
                      {item.isActive === false ? "Pasif" : String(item.status || "Aktif")}
                    </td>
                    <td className="px-5 py-4 text-[#5d5751]">{String(item.sortOrder ?? "-")}</td>
                    <td className="px-5 py-4">
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => startEdit(item)}
                          className="flex h-9 w-9 items-center justify-center border border-[#ddd4c9] text-[#5d5751] hover:border-[#c9a36d] hover:text-[#c9a36d]"
                          aria-label="Düzenle"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        {typeof item.id === "number" ? (
                          <button
                            type="button"
                            onClick={() => void handleDelete(item.id as number)}
                            className="flex h-9 w-9 items-center justify-center border border-red-100 text-red-500 hover:bg-red-50"
                            aria-label="Sil"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
}
