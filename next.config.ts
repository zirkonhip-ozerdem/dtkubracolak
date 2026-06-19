import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Başına yıldız (*) koyarak yerel ağdaki tüm IP değişimlerine (1.5, 1.8, 1.25 vb.) tek seferde izin veriyoruz:
  allowedDevOrigins: ["*.localhost", "192.168.1.*", "localhost:3000"]
};

export default nextConfig;