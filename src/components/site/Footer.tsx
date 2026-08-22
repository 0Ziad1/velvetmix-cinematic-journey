import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-border bg-velvet-deep/30 py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-lg font-extrabold uppercase tracking-[0.22em] text-foreground">
            Velvet<span className="text-accent">Mix</span>
          </p>
          <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground">
            {t("footer.tag")}
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} VelvetMix. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
