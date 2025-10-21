import { NextResponse } from "next/server";
import ExcelJS from "exceljs";
import fs from "fs";
import path from "path";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const timestamp = new Date().toISOString();

    const filePath = path.join(process.cwd(), "public", "inquiries.xlsx");
    const columns = [
      { header: "Name", key: "Name" },
      { header: "Email", key: "Email" },
      { header: "Phone", key: "Phone" },
      { header: "Message", key: "Message" },
      { header: "Timestamp", key: "Timestamp" },
    ];

    const workbook = new ExcelJS.Workbook();

    if (fs.existsSync(filePath)) {
      await workbook.xlsx.readFile(filePath);
      let sheet = workbook.getWorksheet("Inquiries") || workbook.worksheets[0];
      if (!sheet) {
        sheet = workbook.addWorksheet("Inquiries");
        sheet.columns = columns;
      }
      if (!sheet.columns?.length) {
        sheet.columns = columns;
      }
      sheet.addRow({ Name: name, Email: email, Phone: phone || "", Message: message, Timestamp: timestamp });
      await workbook.xlsx.writeFile(filePath);
    } else {
      const sheet = workbook.addWorksheet("Inquiries");
      sheet.columns = columns;
      sheet.addRow({ Name: name, Email: email, Phone: phone || "", Message: message, Timestamp: timestamp });
      await workbook.xlsx.writeFile(filePath);
    }

    console.log("[CONTACT_SAVED]", { name, email, phone, message, timestamp });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("[CONTACT_ERROR]", err);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}