import { PrismaPg } from '@prisma/adapter-pg'
import * as bcrypt from 'bcryptjs'
import 'dotenv/config'
import { Pool } from 'pg'
import { PrismaClient } from '../lib/generated/prisma/client'

const connectionString = `${process.env.DATABASE_URL}`
const pool = new Pool({ connectionString })
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

async function main() {
  console.log('🌱 Iniciando seed...\n')

  // ----------------------------------------------------------
  //  1. BRANDS
  // ----------------------------------------------------------
  console.log('→ Creando marcas...')

  const mac = await prisma.brand.upsert({
    where: { slug: 'mac-cosmetics' },
    update: {},
    create: {
      name: 'MAC Cosmetics',
      slug: 'mac-cosmetics',
      description:
        'Marca profesional de maquillaje fundada en Toronto en 1984.',
      country: 'Canadá',
      website: 'https://www.maccosmetics.com',
      isActive: true,
    },
  })

  const nyx = await prisma.brand.upsert({
    where: { slug: 'nyx-professional' },
    update: {},
    create: {
      name: 'NYX Professional Makeup',
      slug: 'nyx-professional',
      description:
        'Maquillaje profesional accesible fundado en Los Ángeles en 1999.',
      country: 'EE.UU.',
      website: 'https://www.nyxcosmetics.com',
      isActive: true,
    },
  })

  const fenty = await prisma.brand.upsert({
    where: { slug: 'fenty-beauty' },
    update: {},
    create: {
      name: 'Fenty Beauty',
      slug: 'fenty-beauty',
      description:
        'Marca creada por Rihanna en 2017, reconocida por su gama inclusiva.',
      country: 'EE.UU.',
      website: 'https://www.fentybeauty.com',
      isActive: true,
    },
  })

  const maybelline = await prisma.brand.upsert({
    where: { slug: 'maybelline' },
    update: {},
    create: {
      name: 'Maybelline',
      slug: 'maybelline',
      description: 'Una de las marcas de maquillaje más vendidas del mundo.',
      country: 'EE.UU.',
      website: 'https://www.maybelline.com',
      isActive: true,
    },
  })

  console.log('  ✓ 4 marcas creadas\n')

  // ----------------------------------------------------------
  //  2. CATEGORIES
  // ----------------------------------------------------------
  console.log('→ Creando categorías...')

  const catLabios = await prisma.category.upsert({
    where: { slug: 'labios' },
    update: {},
    create: { name: 'Labios', slug: 'labios', sortOrder: 1 },
  })

  const catRostro = await prisma.category.upsert({
    where: { slug: 'rostro' },
    update: {},
    create: { name: 'Rostro', slug: 'rostro', sortOrder: 2 },
  })

  const catOjos = await prisma.category.upsert({
    where: { slug: 'ojos' },
    update: {},
    create: { name: 'Ojos', slug: 'ojos', sortOrder: 3 },
  })

  await prisma.category.upsert({
    where: { slug: 'labiales' },
    update: {},
    create: {
      name: 'Labiales',
      slug: 'labiales',
      parentId: catLabios.id,
      sortOrder: 1,
    },
  })

  await prisma.category.upsert({
    where: { slug: 'gloss' },
    update: {},
    create: {
      name: 'Gloss',
      slug: 'gloss',
      parentId: catLabios.id,
      sortOrder: 2,
    },
  })

  await prisma.category.upsert({
    where: { slug: 'bases' },
    update: {},
    create: {
      name: 'Bases',
      slug: 'bases',
      parentId: catRostro.id,
      sortOrder: 1,
    },
  })

  await prisma.category.upsert({
    where: { slug: 'correctores' },
    update: {},
    create: {
      name: 'Correctores',
      slug: 'correctores',
      parentId: catRostro.id,
      sortOrder: 2,
    },
  })

  await prisma.category.upsert({
    where: { slug: 'rimel' },
    update: {},
    create: {
      name: 'Rímel',
      slug: 'rimel',
      parentId: catOjos.id,
      sortOrder: 1,
    },
  })

  await prisma.category.upsert({
    where: { slug: 'paletas' },
    update: {},
    create: {
      name: 'Paletas',
      slug: 'paletas',
      parentId: catOjos.id,
      sortOrder: 2,
    },
  })

  console.log('  ✓ 9 categorías creadas\n')

  // ----------------------------------------------------------
  //  3. TAGS
  // ----------------------------------------------------------
  console.log('→ Creando tags...')

  const tagCrueltyFree = await prisma.tag.upsert({
    where: { slug: 'cruelty-free' },
    update: {},
    create: { name: 'cruelty-free', slug: 'cruelty-free', icon: 'ti-heart' },
  })

  const tagVegano = await prisma.tag.upsert({
    where: { slug: 'vegano' },
    update: {},
    create: { name: 'vegano', slug: 'vegano', icon: 'ti-leaf' },
  })

  const tagWaterproof = await prisma.tag.upsert({
    where: { slug: 'waterproof' },
    update: {},
    create: { name: 'waterproof', slug: 'waterproof', icon: 'ti-droplet-off' },
  })

  const tagLongWear = await prisma.tag.upsert({
    where: { slug: 'long-wear' },
    update: {},
    create: { name: 'long-wear', slug: 'long-wear', icon: 'ti-clock' },
  })

  await prisma.tag.upsert({
    where: { slug: 'spf' },
    update: {},
    create: { name: 'SPF', slug: 'spf', icon: 'ti-sun' },
  })

  console.log('  ✓ 5 tags creados\n')

  // ----------------------------------------------------------
  //  4. INGREDIENTS
  // ----------------------------------------------------------
  console.log('→ Creando ingredientes...')

  const ingredientsList = await Promise.all([
    prisma.ingredient.upsert({
      where: { inciName: 'AQUA' },
      update: {},
      create: {
        inciName: 'AQUA',
        commonName: 'Agua',
        purpose: 'Solvente',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'GLYCERIN' },
      update: {},
      create: {
        inciName: 'GLYCERIN',
        commonName: 'Glicerina',
        purpose: 'Humectante',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'DIMETHICONE' },
      update: {},
      create: {
        inciName: 'DIMETHICONE',
        commonName: 'Silicona',
        purpose: 'Emoliente',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'PARFUM' },
      update: {},
      create: {
        inciName: 'PARFUM',
        commonName: 'Fragancia',
        purpose: 'Aroma',
        isAllergen: true,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'LIMONENE' },
      update: {},
      create: {
        inciName: 'LIMONENE',
        commonName: 'Limoneno',
        purpose: 'Aroma',
        isAllergen: true,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'NIACINAMIDE' },
      update: {},
      create: {
        inciName: 'NIACINAMIDE',
        commonName: 'Niacinamida',
        purpose: 'Iluminador',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'BEESWAX' },
      update: {},
      create: {
        inciName: 'BEESWAX',
        commonName: 'Cera de abeja',
        purpose: 'Texturizante',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'PANTHENOL' },
      update: {},
      create: {
        inciName: 'PANTHENOL',
        commonName: 'Pro-vitamina B5',
        purpose: 'Acondicionador',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'MICA' },
      update: {},
      create: {
        inciName: 'MICA',
        commonName: 'Mica',
        purpose: 'Pigmento shimmer',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'TITANIUM DIOXIDE' },
      update: {},
      create: {
        inciName: 'TITANIUM DIOXIDE',
        commonName: 'Dióxido de titanio',
        purpose: 'Pigmento opacificante',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'ISODODECANE' },
      update: {},
      create: {
        inciName: 'ISODODECANE',
        commonName: 'Isododecano',
        purpose: 'Solvente texturizante',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'SILICA' },
      update: {},
      create: {
        inciName: 'SILICA',
        commonName: 'Sílica',
        purpose: 'Matificante',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'CERA ALBA' },
      update: {},
      create: {
        inciName: 'CERA ALBA',
        commonName: 'Cera blanca de abeja',
        purpose: 'Estructurante',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'TOCOPHERYL ACETATE' },
      update: {},
      create: {
        inciName: 'TOCOPHERYL ACETATE',
        commonName: 'Vitamina E',
        purpose: 'Antioxidante',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'SODIUM HYALURONATE' },
      update: {},
      create: {
        inciName: 'SODIUM HYALURONATE',
        commonName: 'Ácido hialurónico',
        purpose: 'Hidratante',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'BENZYL ALCOHOL' },
      update: {},
      create: {
        inciName: 'BENZYL ALCOHOL',
        commonName: 'Alcohol bencílico',
        purpose: 'Conservador',
        isAllergen: true,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'STEARIC ACID' },
      update: {},
      create: {
        inciName: 'STEARIC ACID',
        commonName: 'Ácido esteárico',
        purpose: 'Emulsionante',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'TRIETHANOLAMINE' },
      update: {},
      create: {
        inciName: 'TRIETHANOLAMINE',
        commonName: 'Trietanolamina',
        purpose: 'Regulador de pH',
        isAllergen: false,
      },
    }),
    prisma.ingredient.upsert({
      where: { inciName: 'PROPYLENE GLYCOL' },
      update: {},
      create: {
        inciName: 'PROPYLENE GLYCOL',
        commonName: 'Propilenglicol',
        purpose: 'Humectante solvente',
        isAllergen: true,
      },
    }),
  ])

  const ingMap: Record<string, number> = {}
  ingredientsList.forEach((ing: { inciName: string; id: number }) => {
    ingMap[ing.inciName] = ing.id
  })

  console.log('  ✓ 19 ingredientes creados\n')

  // ----------------------------------------------------------
  //  5. PRODUCTS
  // ----------------------------------------------------------
  console.log('→ Creando productos...')

  // ── Producto 1: Labial MAC ────────────────────────────────
  const labialMac = await prisma.product.upsert({
    where: { slug: 'labial-matte-rouge-allure-mac' },
    update: {},
    create: {
      name: 'Labial Matte Rouge Allure',
      slug: 'labial-matte-rouge-allure-mac',
      description:
        'El labial matte icónico de MAC. Fórmula de larga duración con acabado mate perfecto.',
      price: 520.0,
      comparePrice: 650.0,
      sku: 'MAC-LBL-001',
      finish: 'matte',
      isActive: true,
      isFeatured: true,
      metaTitle: 'Labial Matte MAC Rouge Allure',
      metaDescription:
        'Labial matte de larga duración MAC. Pigmentación intensa.',
      categoryId: catLabios.id,
      brandId: mac.id,
      shades: {
        create: [
          {
            name: 'Ruby Woo',
            hexColor: '#C7335A',
            stock: 45,
            sku: 'MAC-LBL-001-RW',
            isActive: true,
          },
          {
            name: 'Velvet Teddy',
            hexColor: '#C4856A',
            stock: 30,
            sku: 'MAC-LBL-001-VT',
            isActive: true,
          },
          {
            name: 'Diva',
            hexColor: '#8B1A2E',
            stock: 12,
            sku: 'MAC-LBL-001-DV',
            isActive: true,
          },
          {
            name: 'Coral Bliss',
            hexColor: '#E8867A',
            stock: 0,
            sku: 'MAC-LBL-001-CB',
            isActive: false,
          },
        ],
      },
      media: {
        create: [
          {
            url: '/media/mac-labial-001.jpg',
            altText: 'Labial Matte MAC Ruby Woo',
            type: 'image',
            sortOrder: 1,
          },
          {
            url: '/media/mac-labial-001-swatches.jpg',
            altText: 'Swatches de tonos',
            type: 'image',
            sortOrder: 2,
          },
        ],
      },
      tags: {
        create: [{ tagId: tagCrueltyFree.id }, { tagId: tagLongWear.id }],
      },
      ingredients: {
        create: [
          { ingredientId: ingMap['ISODODECANE'], position: 1 },
          { ingredientId: ingMap['SILICA'], position: 2 },
          { ingredientId: ingMap['CERA ALBA'], position: 3 },
          { ingredientId: ingMap['PARFUM'], position: 4 },
          { ingredientId: ingMap['TOCOPHERYL ACETATE'], position: 5 },
          { ingredientId: ingMap['LIMONENE'], position: 6 },
        ],
      },
    },
  })

  // ── Producto 2: Base NYX ──────────────────────────────────
  const baseNyx = await prisma.product.upsert({
    where: { slug: 'base-soft-matte-longwear-nyx' },
    update: {},
    create: {
      name: 'Soft Matte Longwear Foundation',
      slug: 'base-soft-matte-longwear-nyx',
      description:
        'Base de maquillaje vegana con acabado mate de larga duración. Cobertura media a completa.',
      price: 349.0,
      sku: 'NYX-BSE-042',
      finish: 'matte',
      isActive: true,
      isFeatured: false,
      metaTitle: 'Base Soft Matte NYX',
      metaDescription: 'Base matte vegana y cruelty-free de NYX.',
      categoryId: catRostro.id,
      brandId: nyx.id,
      shades: {
        create: [
          {
            name: 'Vanilla (01)',
            hexColor: '#F5E0C8',
            stock: 60,
            sku: 'NYX-BSE-042-01',
            isActive: true,
          },
          {
            name: 'Nude (05)',
            hexColor: '#E8C5A0',
            stock: 55,
            sku: 'NYX-BSE-042-05',
            isActive: true,
          },
          {
            name: 'Golden (10)',
            hexColor: '#C8946A',
            stock: 38,
            sku: 'NYX-BSE-042-10',
            isActive: true,
          },
          {
            name: 'Mocha (15)',
            hexColor: '#8B5E3C',
            stock: 22,
            sku: 'NYX-BSE-042-15',
            isActive: true,
          },
          {
            name: 'Espresso (20)',
            hexColor: '#4A2C1A',
            stock: 18,
            sku: 'NYX-BSE-042-20',
            isActive: true,
          },
        ],
      },
      media: {
        create: [
          {
            url: '/media/nyx-base-042.jpg',
            altText: 'Base NYX Soft Matte',
            type: 'image',
            sortOrder: 1,
          },
          {
            url: '/media/nyx-base-042-tonos.jpg',
            altText: 'Gama de tonos NYX Foundation',
            type: 'image',
            sortOrder: 2,
          },
        ],
      },
      tags: {
        create: [
          { tagId: tagCrueltyFree.id },
          { tagId: tagVegano.id },
          { tagId: tagWaterproof.id },
        ],
      },
      ingredients: {
        create: [
          { ingredientId: ingMap['AQUA'], position: 1 },
          { ingredientId: ingMap['DIMETHICONE'], position: 2 },
          { ingredientId: ingMap['GLYCERIN'], position: 3 },
          { ingredientId: ingMap['NIACINAMIDE'], position: 4 },
          { ingredientId: ingMap['TITANIUM DIOXIDE'], position: 5 },
          { ingredientId: ingMap['SODIUM HYALURONATE'], position: 6 },
          { ingredientId: ingMap['BENZYL ALCOHOL'], position: 7 },
        ],
      },
    },
  })

  // ── Producto 3: Paleta Fenty ──────────────────────────────
  const paleta = await prisma.product.upsert({
    where: { slug: 'paleta-nude-obsessions-fenty' },
    update: {},
    create: {
      name: 'Paleta de Sombras Nude Obsessions',
      slug: 'paleta-nude-obsessions-fenty',
      description:
        'Paleta de 9 sombras en tonos nude con acabados matte y shimmer. Fórmula vegana de alta pigmentación.',
      price: 780.0,
      comparePrice: 950.0,
      sku: 'FTY-PLT-007',
      barcode: '0194503000071',
      stock: 85,
      finish: 'shimmer',
      isActive: true,
      isFeatured: true,
      metaTitle: 'Paleta Nude Obsessions Fenty Beauty',
      metaDescription: 'Paleta de sombras nude vegana de Fenty Beauty.',
      categoryId: catOjos.id,
      brandId: fenty.id,
      media: {
        create: [
          {
            url: '/media/fenty-paleta-007.jpg',
            altText: 'Paleta Nude Obsessions Fenty',
            type: 'image',
            sortOrder: 1,
          },
          {
            url: '/media/fenty-paleta-007-look.jpg',
            altText: 'Look aplicado con la paleta',
            type: 'image',
            sortOrder: 2,
          },
        ],
      },
      tags: {
        create: [{ tagId: tagVegano.id }],
      },
      ingredients: {
        create: [
          { ingredientId: ingMap['MICA'], position: 1 },
          { ingredientId: ingMap['SILICA'], position: 2 },
          { ingredientId: ingMap['DIMETHICONE'], position: 3 },
          { ingredientId: ingMap['TOCOPHERYL ACETATE'], position: 4 },
          { ingredientId: ingMap['TITANIUM DIOXIDE'], position: 5 },
        ],
      },
    },
  })

  // ── Producto 4: Rímel Maybelline ──────────────────────────
  const rimel = await prisma.product.upsert({
    where: { slug: 'rimel-sky-high-maybelline' },
    update: {},
    create: {
      name: 'Rímel Lash Sensational Sky High',
      slug: 'rimel-sky-high-maybelline',
      description:
        'El rímel viral de Maybelline. Cepillo telescópico waterproof que resiste el agua todo el día.',
      price: 189.0,
      sku: 'MYB-RML-011',
      barcode: '3600531571030',
      finish: 'glossy',
      isActive: true,
      isFeatured: true,
      metaTitle: 'Rímel Sky High Maybelline Waterproof',
      metaDescription:
        'Rímel waterproof Maybelline Sky High. Pestañas más largas todo el día.',
      categoryId: catOjos.id,
      brandId: maybelline.id,
      shades: {
        create: [
          {
            name: 'Blackest Black',
            hexColor: '#1A1A1A',
            stock: 120,
            sku: 'MYB-RML-011-BK',
            isActive: true,
          },
          {
            name: 'Brownish Black',
            hexColor: '#3B2314',
            stock: 45,
            sku: 'MYB-RML-011-BR',
            isActive: true,
          },
          {
            name: 'Navy Blue',
            hexColor: '#1B3A6B',
            stock: 20,
            sku: 'MYB-RML-011-NB',
            isActive: true,
          },
        ],
      },
      media: {
        create: [
          {
            url: '/media/maybelline-rimel-011.jpg',
            altText: 'Rímel Sky High Maybelline',
            type: 'image',
            sortOrder: 1,
          },
          {
            url: '/media/maybelline-rimel-011-look.jpg',
            altText: 'Resultado aplicado en pestañas',
            type: 'image',
            sortOrder: 2,
          },
        ],
      },
      tags: {
        create: [{ tagId: tagWaterproof.id }, { tagId: tagLongWear.id }],
      },
      ingredients: {
        create: [
          { ingredientId: ingMap['AQUA'], position: 1 },
          { ingredientId: ingMap['BEESWAX'], position: 2 },
          { ingredientId: ingMap['STEARIC ACID'], position: 3 },
          { ingredientId: ingMap['TRIETHANOLAMINE'], position: 4 },
          { ingredientId: ingMap['PROPYLENE GLYCOL'], position: 5 },
          { ingredientId: ingMap['PANTHENOL'], position: 6 },
        ],
      },
    },
  })

  console.log('  ✓ 4 productos creados\n')

  // ----------------------------------------------------------
  //  6. USERS
  // ----------------------------------------------------------
  console.log('→ Creando usuarios...')

  const adminPass = await bcrypt.hash('Admin123!', 10)
  const userPass = await bcrypt.hash('User123!', 10)

  await prisma.user.upsert({
    where: { email: 'admin@tiendamakeup.mx' },
    update: {},
    create: {
      firstName: 'Admin',
      lastName: 'Tienda',
      email: 'admin@tiendamakeup.mx',
      phone: '+52 222 100 0001',
      passwordHash: adminPass,
      role: 'admin',
      isActive: true,
    },
  })

  const fernanda = await prisma.user.upsert({
    where: { email: 'fernanda@ejemplo.mx' },
    update: {},
    create: {
      firstName: 'Fernanda',
      lastName: 'Martínez',
      email: 'fernanda@ejemplo.mx',
      phone: '+52 222 100 0002',
      passwordHash: userPass,
      role: 'customer',
      isActive: true,
      addresses: {
        create: {
          street: 'Av. Reforma 245, Col. Centro',
          city: 'Puebla',
          state: 'Puebla',
          zip: '72000',
          country: 'MX',
          isDefault: true,
        },
      },
    },
  })

  const sofia = await prisma.user.upsert({
    where: { email: 'sofia@ejemplo.mx' },
    update: {},
    create: {
      firstName: 'Sofía',
      lastName: 'Ramírez',
      email: 'sofia@ejemplo.mx',
      phone: '+52 222 100 0003',
      passwordHash: userPass,
      role: 'customer',
      isActive: true,
      addresses: {
        create: {
          street: 'Calle 5 de Mayo 88, Col. Analco',
          city: 'Puebla',
          state: 'Puebla',
          zip: '72160',
          country: 'MX',
          isDefault: true,
        },
      },
    },
  })

  const daniela = await prisma.user.upsert({
    where: { email: 'daniela@ejemplo.mx' },
    update: {},
    create: {
      firstName: 'Daniela',
      lastName: 'Vázquez',
      email: 'daniela@ejemplo.mx',
      phone: '+52 222 100 0004',
      passwordHash: userPass,
      role: 'customer',
      isActive: true,
      addresses: {
        create: {
          street: 'Blvd. Atlixcáyotl 1500, Col. Reserva Territorial',
          city: 'Puebla',
          state: 'Puebla',
          zip: '72810',
          country: 'MX',
          isDefault: true,
        },
      },
    },
  })

  console.log('  ✓ 4 usuarios creados\n')

  // ----------------------------------------------------------
  //  7. COUPONS
  // ----------------------------------------------------------
  console.log('→ Creando cupones...')

  await prisma.coupon.upsert({
    where: { code: 'BIENVENIDA10' },
    update: {},
    create: {
      code: 'BIENVENIDA10',
      type: 'percentage',
      value: 10,
      minPurchase: 200,
      maxUses: 500,
      usesCount: 0,
      expiresAt: new Date('2026-12-31'),
      isActive: true,
    },
  })

  await prisma.coupon.upsert({
    where: { code: 'MAKEUP150' },
    update: {},
    create: {
      code: 'MAKEUP150',
      type: 'fixed',
      value: 150,
      minPurchase: 800,
      maxUses: 100,
      usesCount: 12,
      expiresAt: new Date('2026-06-30'),
      isActive: true,
    },
  })

  await prisma.coupon.upsert({
    where: { code: 'VERANO20' },
    update: {},
    create: {
      code: 'VERANO20',
      type: 'percentage',
      value: 20,
      minPurchase: 500,
      maxUses: 200,
      usesCount: 45,
      expiresAt: new Date('2026-08-31'),
      isActive: true,
    },
  })

  console.log('  ✓ 3 cupones creados\n')

  // ----------------------------------------------------------
  //  8. ORDERS
  // ----------------------------------------------------------
  console.log('→ Creando órdenes...')

  const addrFernanda = await prisma.address.findFirst({
    where: { userId: fernanda.id },
  })
  const addrSofia = await prisma.address.findFirst({
    where: { userId: sofia.id },
  })
  const shadeRubyWoo = await prisma.shade.findFirst({
    where: { sku: 'MAC-LBL-001-RW' },
  })
  const shadeGolden = await prisma.shade.findFirst({
    where: { sku: 'NYX-BSE-042-10' },
  })
  const shadeBlack = await prisma.shade.findFirst({
    where: { sku: 'MYB-RML-011-BK' },
  })

  await prisma.order.create({
    data: {
      userId: fernanda.id,
      addressId: addrFernanda?.id,
      status: 'delivered',
      subtotal: 520,
      discount: 0,
      shipping: 99,
      total: 619,
      notes: 'Por favor empaque con regalo.',
      items: {
        create: {
          productId: labialMac.id,
          shadeId: shadeRubyWoo?.id,
          quantity: 1,
          unitPrice: 520,
          subtotal: 520,
        },
      },
      payments: {
        create: {
          provider: 'stripe',
          transactionId: 'pi_3OxKmABC12345',
          status: 'paid',
          amount: 619,
          currency: 'MXN',
          paidAt: new Date('2026-03-15T14:22:00Z'),
        },
      },
    },
  })

  await prisma.order.create({
    data: {
      userId: sofia.id,
      addressId: addrSofia?.id,
      status: 'shipped',
      subtotal: 538,
      discount: 53.8,
      shipping: 0,
      total: 484.2,
      items: {
        create: [
          {
            productId: baseNyx.id,
            shadeId: shadeGolden?.id,
            quantity: 1,
            unitPrice: 349,
            subtotal: 349,
          },
          {
            productId: rimel.id,
            shadeId: shadeBlack?.id,
            quantity: 1,
            unitPrice: 189,
            subtotal: 189,
          },
        ],
      },
      payments: {
        create: {
          provider: 'mercadopago',
          transactionId: 'MP-9987654321',
          status: 'paid',
          amount: 484.2,
          currency: 'MXN',
          paidAt: new Date('2026-04-02T10:05:00Z'),
        },
      },
    },
  })

  console.log('  ✓ 2 órdenes creadas\n')

  // ----------------------------------------------------------
  //  9. REVIEWS
  // ----------------------------------------------------------
  console.log('→ Creando reseñas...')

  await prisma.review.createMany({
    data: [
      {
        productId: labialMac.id,
        userId: fernanda.id,
        shadeId: shadeRubyWoo?.id,
        rating: 5,
        comment:
          'Dura todo el día sin retoque. Ruby Woo es perfecto para cualquier ocasión.',
        isVerified: true,
        isApproved: true,
      },
      {
        productId: labialMac.id,
        userId: sofia.id,
        shadeId: null,
        rating: 4,
        comment:
          'Me encanta Velvet Teddy, muy nude. Reseca un poco después de 6 horas.',
        isVerified: false,
        isApproved: true,
      },
      {
        productId: baseNyx.id,
        userId: sofia.id,
        shadeId: shadeGolden?.id,
        rating: 5,
        comment: 'La mejor base de drugstore. Cubre todo sin sentirse pesada.',
        isVerified: true,
        isApproved: true,
      },
      {
        productId: paleta.id,
        userId: daniela.id,
        shadeId: null,
        rating: 5,
        comment: 'Los tonos shimmer son increíbles, pigmentación al 100%.',
        isVerified: true,
        isApproved: true,
      },
      {
        productId: paleta.id,
        userId: fernanda.id,
        shadeId: null,
        rating: 3,
        comment: 'Los matte se caen un poco, pero los brillantes compensan.',
        isVerified: true,
        isApproved: true,
      },
      {
        productId: rimel.id,
        userId: sofia.id,
        shadeId: shadeBlack?.id,
        rating: 5,
        comment:
          'El mejor rímel de farmacia. Aguanta todo el día incluso bajo la lluvia.',
        isVerified: true,
        isApproved: true,
      },
    ],
  })

  console.log('  ✓ 6 reseñas creadas\n')

  // ----------------------------------------------------------
  //  10. WISHLISTS
  // ----------------------------------------------------------
  console.log('→ Creando wishlists...')

  await prisma.wishlist.createMany({
    data: [
      { userId: fernanda.id, productId: paleta.id },
      { userId: fernanda.id, productId: rimel.id },
      { userId: sofia.id, productId: labialMac.id },
      { userId: daniela.id, productId: baseNyx.id },
      { userId: daniela.id, productId: rimel.id },
    ],
  })

  console.log('  ✓ 5 wishlist items creados\n')

  // ----------------------------------------------------------
  //  11. CART
  // ----------------------------------------------------------
  console.log('→ Creando carrito activo...')

  await prisma.cart.create({
    data: {
      userId: daniela.id,
      items: {
        create: [
          { productId: paleta.id, shadeId: null, quantity: 1 },
          { productId: labialMac.id, shadeId: shadeRubyWoo?.id, quantity: 2 },
        ],
      },
    },
  })

  console.log('  ✓ 1 carrito con 2 items creado\n')

  console.log('✅ Seed completado exitosamente.')
  console.log('─────────────────────────────────')
  console.log('  Marcas:       4')
  console.log('  Categorías:   9')
  console.log('  Tags:         5')
  console.log('  Ingredientes: 19')
  console.log('  Productos:    4')
  console.log('  Usuarios:     4')
  console.log('  Cupones:      3')
  console.log('  Órdenes:      2')
  console.log('  Reseñas:      6')
  console.log('  Wishlists:    5')
  console.log('  Carritos:     1')
  console.log('─────────────────────────────────')
}

main()
  .then(async () => {
    await prisma.$disconnect()
    await pool.end()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    await pool.end()
    process.exit(1)
  })
