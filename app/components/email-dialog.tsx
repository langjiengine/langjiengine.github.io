"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { LANGII_CONTACT } from "../data/contact";

type EmailDialogProps = {
  open: boolean;
  onClose: () => void;
  subject?: string;
  body?: string;
  inquiryCopied?: boolean;
};

function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.style.position = "fixed";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  return Promise.resolve();
}

export function EmailDialog({ open, onClose, subject = "LANGII product inquiry", body = "", inquiryCopied = false }: EmailDialogProps) {
  const [copyLabel, setCopyLabel] = useState("Copy email address");
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onCloseRef.current();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.classList.add("dialog-open");
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("dialog-open");
      previousFocus?.focus();
    };
  }, [open]);

  if (!open) return null;

  const gmailQuery = new URLSearchParams({ to: LANGII_CONTACT.email, su: subject, body });
  const outlookQuery = new URLSearchParams({ to: LANGII_CONTACT.email, subject, body });
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&${gmailQuery.toString()}`;
  const outlookUrl = `https://outlook.office.com/mail/deeplink/compose?${outlookQuery.toString()}`;
  const mailtoUrl = `mailto:${LANGII_CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  async function copyEmail() {
    await copyText(LANGII_CONTACT.email);
    setCopyLabel("Email copied");
    window.setTimeout(() => setCopyLabel("Copy email address"), 1800);
  }

  return (
    <div className="email-dialog-backdrop">
      <section className="email-dialog" role="dialog" aria-modal="true" aria-labelledby="email-dialog-title">
        <button ref={closeButtonRef} className="email-dialog-close" type="button" onClick={onClose} aria-label="Close email options">×</button>
        <p className="eyebrow">Email LANGII sales</p>
        <h2 id="email-dialog-title">Choose how to send your inquiry.</h2>
        <p className="email-dialog-intro">Use a web inbox, copy the sales address, or open the email application configured on your device.</p>

        <div className="email-address-card">
          <span>Sales email</span>
          <strong>{LANGII_CONTACT.email}</strong>
          <button type="button" onClick={copyEmail}>{copyLabel}</button>
        </div>

        <div className="email-dialog-actions">
          <a className="button button-primary" href={gmailUrl} target="_blank" rel="noreferrer">Open Gmail</a>
          <a className="button button-secondary" href={outlookUrl} target="_blank" rel="noreferrer">Open Outlook</a>
          <a className="email-app-link" href={mailtoUrl}>Use email application</a>
        </div>

        {inquiryCopied && <p className="email-dialog-note">Your completed inquiry has also been copied, ready to paste if your email service does not prefill it.</p>}
      </section>
    </div>
  );
}

export function EmailDialogTrigger({ children, className }: { children: ReactNode; className?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={className} type="button" onClick={() => setOpen(true)}>{children}</button>
      <EmailDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
