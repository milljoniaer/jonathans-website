/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PREVIEW_MODE?: string;
  readonly VITE_BRANCH_SLUG?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
