import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from "@storybook/nextjs-vite";
import * as projectAnnotations from "./preview";

// Apply correct configuration for Storybook + Vitest tests
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
