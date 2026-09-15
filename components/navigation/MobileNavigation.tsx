"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CtaButton } from "@/components/shared/CtaButton";
import { MainNav } from "./MainNav";

export function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <Menu />
          </Button>
        }
      />
      <SheetContent side="right" data-tone="dark" className="bg-ink">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav aria-label="Main" className="px-4">
          <MainNav orientation="vertical" onNavigate={() => setOpen(false)} />
        </nav>
        <div className="mt-2 px-4">
          <CtaButton
            href="/contact"
            size="lg"
            className="w-full"
            onClick={() => setOpen(false)}
          >
            Let&apos;s Work Together
          </CtaButton>
        </div>
      </SheetContent>
    </Sheet>
  );
}
