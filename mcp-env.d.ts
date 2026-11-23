/// <reference types="mcp-use/types" />
import "mcp-use";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      [key: string]: string | undefined;
    }
  }
}

export {};
