/* NOTE :

Original creator : https://github.com/Ditzzx-vibecoder

I just made a few changes so that the results are directly buffered
without having to save the result file.

Remake by : https://github.com/MichelleBot
*/

import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { createCanvas, GlobalFonts, loadImage } from '@napi-rs/canvas'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fontUrl = 'https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/e9395a9b53e1ae289e2f442b15526f8d6034c541/assets/fonts/TeutonNormal.otf'
let isFontLoaded = false

const lobbyLinks = Array.from({ length: 30 }, (_, i) => `https://raw.githubusercontent.com/Ditzzx-vibecoder/fake-ff/e9395a9b53e1ae289e2f442b15526f8d6034c541/assets/lobby/${i + 1}.jpg`)

export const config = {
   canvas: { width: 1920, height: 3416 },
   username: {
      a: 2650,
      b: 2790,
      c: 727,
      d: 1319,
      centerX: 1009,
      fontSize: 85,
      maxChars: 20,
   },
   debug: false,
}

async function loadFont() {
   if (isFontLoaded) return
   try {
      const res = await fetch(fontUrl)
      if (!res.ok) throw new Error(`Failed to fetch font: ${res.statusText}`)
      const arrayBuffer = await res.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      GlobalFonts.register(buffer, 'TeutonNormal')
      isFontLoaded = true
   } catch (error) {
      console.error('Error loading font from URL:', error)
      throw error
   }
}

function drawGradientUsername(ctx, username, cfg) {
   const { a, b, c, d, fontSize, maxChars } = cfg
   const name = String(username || 'Player').slice(0, maxChars)
   const boxW = d - c
   const boxH = b - a
   const cx = cfg.centerX ?? (c + boxW / 2)

   let size = fontSize
   ctx.textAlign = 'center'
   ctx.textBaseline = 'middle'

   while (size > 12) {
      ctx.font = `${size}px TeutonNormal`
      if (ctx.measureText(name).width <= boxW) break
      size -= 1
   }

   ctx.font = `${size}px TeutonNormal`
   const centerY = a + boxH / 2
   const textW = ctx.measureText(name).width
   const gradX1 = cx - textW / 2
   const gradX2 = cx + textW / 2

   const grad = ctx.createLinearGradient(gradX1, centerY, gradX2, centerY)
   grad.addColorStop(0.00, '#FFFDE7')
   grad.addColorStop(0.35, '#FFE57F')
   grad.addColorStop(0.70, '#FFB300')
   grad.addColorStop(1.00, '#FF8F00')

   ctx.save()
   ctx.shadowColor = 'rgba(0,0,0,0.7)'
   ctx.shadowBlur = 8
   ctx.shadowOffsetX = 3
   ctx.shadowOffsetY = 4
   ctx.fillStyle = grad
   ctx.fillText(name, cx, centerY)
   ctx.restore()
}

function drawDebugSafeZone(ctx, cfg) {
   const { a, b, c, d } = cfg
   const x = c
   const y = a
   const w = d - c
   const h = b - a
   const cx = x + w / 2
   const cy = y + h / 2

   ctx.save()
   ctx.lineWidth = 2
   ctx.strokeStyle = 'rgba(255, 0, 0, 0.85)'
   ctx.strokeRect(x, y, w, h)
   ctx.font = 'bold 22px TeutonNormal'
   ctx.fillStyle = 'rgba(255, 0, 0, 0.9)'
   ctx.textAlign = 'left'
   ctx.textBaseline = 'top'
   ctx.fillText(`safe zone ${w}x${h}`, x + 5, y + 5)
   ctx.strokeStyle = 'rgba(255, 220, 0, 0.85)'
   ctx.lineWidth = 1.5
   ctx.beginPath()
   ctx.moveTo(cx - 14, cy)
   ctx.lineTo(cx + 14, cy)
   ctx.moveTo(cx, cy - 14)
   ctx.lineTo(cx, cy + 14)
   ctx.stroke()
   ctx.fillStyle = 'rgba(255, 220, 0, 0.85)'
   ctx.beginPath()
   ctx.arc(cx, cy, 4, 0, Math.PI * 2)
   ctx.fill()
   ctx.restore()
}

export async function generateFF({ username = 'michelle', lobby = null } = {}) {
   await loadFont()
   const lobbyNum = lobby
      ? Math.max(1, Math.min(Number(lobby), 30))
   : Math.floor(Math.random() * 30) + 1
   const lobbyUrl = lobbyLinks[lobbyNum - 1]

   const { width, height } = config.canvas
   const canvas = createCanvas(width, height)
   const ctx = canvas.getContext('2d')
   const lobbyImg = await loadImage(lobbyUrl)
   ctx.drawImage(lobbyImg, 0, 0, width, height)
   drawGradientUsername(ctx, username, config.username)
   if (config.debug) drawDebugSafeZone(ctx, config.username)
   const buffer = await canvas.encode('jpeg', 100)
   return {
      status: true,
      creator: global.creator,
      data: {
         image: buffer
      }
   }
}

export default generateFF