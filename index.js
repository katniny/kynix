#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// get current file path
const __filename = fileURLToPath(import.meta.url);
// get the directory this file is in
const __dirname = path.dirname(__filename);

// the name of the new project, defaults to "kynix-app" if not provided
const projectName = process.argv[2] ?? "kynix-app";
// the full path where the new project will be created
const targetDir = path.join(process.cwd(), projectName);
// the path to the template folder
const templateDir = path.join(__dirname, "template");

// check if the targget directory already exists
// if it does, exit to prevent overwriting
if (fs.existsSync(targetDir)) {
    console.error("Directory already exists. Please clear the directory or create a new one.");
    process.exit(1);
}

// copy the entire template folder to the new project directory
fs.cpSync(templateDir, targetDir, { recursive: true });

// print some instructions
console.log("");
console.log("Kynix quick start ready!");
console.log(`cd ${projectName}`);
console.log("run npm install");
console.log("npm run dev");