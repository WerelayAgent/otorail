import { spawn } from 'child_process';
import puppeteer from 'puppeteer';

const server = spawn('python', ['-m', 'http.server', '3000', '-d', 'dist'], { stdio: 'inherit' });

setTimeout(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request =>
    console.log('REQUEST FAILED:', request.url(), request.failure()?.errorText)
  );

  await page.goto('http://127.0.0.1:3000', { waitUntil: 'networkidle2' }).catch(e => console.log('GOTO ERR', e.message));
  
  await browser.close();
  server.kill();
}, 2000);
