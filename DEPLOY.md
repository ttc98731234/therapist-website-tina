# 部署指南：將網站部署到 tina-psychologist.icu

此指南提供將 Next.js 網站部署到您的 tina-psychologist.icu 域名的步驟。

## 前置準備

1. 確保網站已成功構建：
   ```
   npm run build
   ```

2. 確認 `out` 目錄中有完整的靜態文件：
   ```
   ls -la out/
   ```

## 部署選項

### 選項 1：使用 Vercel（推薦）

Vercel 是 Next.js 的創建者，提供最佳的 Next.js 部署體驗。

1. 在 Vercel 上創建帳號 (https://vercel.com)
2. 安裝 Vercel CLI：
   ```
   npm install -g vercel
   ```
3. 在專案根目錄登入 Vercel：
   ```
   vercel login
   ```
4. 部署網站：
   ```
   vercel
   ```
5. 按照提示操作，將您的域名 tina-psychologist.icu 指向 Vercel 提供的 DNS 記錄。

### 選項 2：使用傳統虛擬主機

如果您使用傳統虛擬主機服務：

1. 將網站構建為靜態導出：
   在 next.config.js 中添加 `output: 'export'`：
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     turbo: false,
   };
   
   module.exports = nextConfig;
   ```

2. 重新構建網站：
   ```
   npm run build
   ```

3. 將 `out` 目錄中的所有文件上傳到您的虛擬主機：
   - 使用 FTP 客戶端（如 FileZilla）
   - 上傳 out/ 目錄下的所有文件到網站根目錄

4. 設置 DNS 記錄：
   - 將 tina-psychologist.icu 的 A 記錄指向您的虛擬主機 IP 地址
   - 或按照虛擬主機服務商的說明更新 DNS 設置

### 選項 3：使用其他平台

您也可以考慮以下平台部署 Next.js 應用：

1. Netlify
2. GitHub Pages + GitHub Actions
3. AWS Amplify
4. DigitalOcean App Platform

## 設置自訂域名

不論選擇哪種部署方式，您都需要：

1. 登入您的域名註冊商控制面板
2. 導航到 DNS 設定
3. 根據部署平台的說明設置適當的 DNS 記錄（A 記錄、CNAME 等）
4. 等待 DNS 傳播（可能需要最多 48 小時）

## 部署後檢查

部署完成後，請檢查：

1. 網站是否可以通過 https://tina-psychologist.icu 訪問
2. 所有頁面是否正常顯示
3. PWA 功能是否正常（可使用 Chrome DevTools 的 Lighthouse 測試）
4. 在移動設備上測試響應式設計

## 疑難排解

如果部署後遇到問題：

1. 檢查部署平台的日誌
2. 確認所有必要的文件已正確上傳
3. 檢查 DNS 設定是否正確
4. 使用 Chrome DevTools 的 Network 標籤檢查網絡請求 