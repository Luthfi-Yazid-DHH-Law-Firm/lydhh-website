import React, { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CloseIcon } from "@sanity/icons";

// Types
type SheetSize = "sm" | "md" | "lg" | "xl" | "full";
type SheetSide = "left" | "right" | "top" | "bottom";

interface SheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
  size?: SheetSize;
  side?: SheetSide;
  className?: string;
  closeOnOutsideClick?: boolean;
  showCloseButton?: boolean;
  transitionDuration?: number;
}

// Sheet Context
interface SheetContextType {
  isOpen: boolean;
  onClose: () => void;
}

const SheetContext = React.createContext<SheetContextType | undefined>(
  undefined
);

function useSheetContext() {
  const context = React.useContext(SheetContext);
  if (!context) {
    throw new Error(
      "Sheet compound components must be used within Sheet component"
    );
  }
  return context;
}

// Size maps
const sizeMap: Record<SheetSize, string> = {
  sm: "w-xs",
  md: "w-md",
  lg: "w-lg",
  xl: "w-xl",
  full: "w-full",
};

const sideMap: Record<SheetSide, string> = {
  left: "inset-y-0 left-0 h-full",
  right: "inset-y-0 right-0 h-full",
  top: "inset-x-0 top-0 w-full",
  bottom: "inset-x-0 bottom-0 w-full",
};

// Sheet component
export default function Sheet({
  isOpen,
  onClose,
  children,
  title,
  description,
  size = "md",
  side = "right",
  className = "",
  closeOnOutsideClick = true,
  showCloseButton = true,
  transitionDuration = 0.3,
}: SheetProps) {
  const [mounted, setMounted] = useState<boolean>(false);

  // Handle SSR
  useEffect(() => {
    setMounted(true);

    // Lock body scroll when sheet is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  //   const isVertical = side === 'top' || side === 'bottom';

  // Motion variants for animations
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Sheet animation variants based on the side
  const sheetVariants = {
    hidden: {
      x: side === "left" ? "-100%" : side === "right" ? "100%" : 0,
      y: side === "top" ? "-100%" : side === "bottom" ? "100%" : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 100,
      transition: {
        // type: "spring",
        // damping: 25,
        // stiffness: 300,
        duration: transitionDuration,
      },
    },
    exit: {
      x: side === "left" ? "-100%" : side === "right" ? "100%" : 0,
      y: side === "top" ? "-100%" : side === "bottom" ? "100%" : 0,
      opacity: 0,
      transition: {
        // type: "spring",
        // damping: 30,
        // stiffness: 300,
        duration: transitionDuration,
      },
    },
  };

  return (
    <SheetContext.Provider value={{ isOpen, onClose }}>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/60"
              onClick={closeOnOutsideClick ? onClose : undefined}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={backdropVariants}
              transition={{ duration: 0.4 }}
            />

            {/* Sheet */}
            <motion.div
              className={`
                fixed bg-white shadow-lg py-8 px-10 space-y-5
                ${sideMap[side]} ${sizeMap[size]} font-sans
                flex flex-col ${className}
              `}
              onClick={(e) => e.stopPropagation()}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={sheetVariants}
            >
              {/* Header */}
              {(title || description || showCloseButton) && (
                <div className="space-y-4">
                  <div className="flex justify-end items-center">
                    {showCloseButton && (
                      <motion.button
                        onClick={onClose}
                        className="rounded-full p-1 hover:bg-gray-100"
                        aria-label="Close"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <CloseIcon className="text-2xl" />
                      </motion.button>
                    )}
                  </div>
                  <div className="w-fit space-y-2">
                    {title && <h1 className="text-xl font-semibold">{ title }</h1>}
                    <div className="h-1 rounded-full bg-gradient-to-r from-[#E1BC1C] to-[#997d03]" />
                  </div>
                  <div>
                    {description && <p className="text-sm text-gray-500">{description}</p>}
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="flex-1 overflow-auto">{children}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SheetContext.Provider>
  );
}

// Compound components
Sheet.Header = function SheetHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`p-4 ${className}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

Sheet.Title = function SheetTitle({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.h3
      className={`text-lg font-semibold ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.h3>
  );
};

Sheet.Description = function SheetDescription({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.p
      className={`text-sm text-gray-500 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      {children}
    </motion.p>
  );
};

Sheet.Content = function SheetContent({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`flex-1 overflow-auto ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      {children}
    </motion.div>
  );
};

Sheet.Footer = function SheetFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

Sheet.Close = function SheetClose({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const { onClose } = useSheetContext();
  return (
    <motion.button
      onClick={onClose}
      className={`inline-flex items-center justify-center rounded-md font-medium
        bg-gray-100 hover:bg-gray-200 h-10 px-4 py-2 ${className}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
};

export { Sheet };
