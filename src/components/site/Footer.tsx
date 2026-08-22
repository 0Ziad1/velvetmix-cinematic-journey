import { useLang } from "@/lib/i18n";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-border bg-velvet-deep/30 py-12">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 px-5 text-center sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
        
        {/* Brand + Description */}
        <div>
          <p className="font-display text-lg font-extrabold uppercase tracking-[0.22em] text-foreground">
            Velvet<span className="text-accent">Mix</span>
          </p>

          <p className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground">
            مصنع سعودي لخلطات المخابز والحلويات والمنتجات الغذائية البودرة.
          </p>
        </div>

        {/* Saudi Flag */}
        <div className="flex items-center justify-center">
          <img
            src="https://flagcdn.com/w80/sa.png"
            alt="Saudi Arabia Flag"
            className="h-10 w-auto rounded-sm object-cover shadow-sm"
          />
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} VelvetMix. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}