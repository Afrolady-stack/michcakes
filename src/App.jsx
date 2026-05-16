import { useMemo, useState } from 'react'
import birthdayTopperCake from './assets/images/birthday-topper-cake.jpg'
import birthdayRoseCake from './assets/images/birthday-rose-cake.jpg'
import redCupcakesBox from './assets/images/red-cupcakes-box.jpg'
import vanillaCupcakesBox from './assets/images/vanilla-cupcakes-box.jpg'

// Summer baked goods images
// Add these image files inside: src/assets/images/
import plainScones from './assets/images/plain-scones.jpg'
import blueberryScones from './assets/images/blueberry-scones.jpg'
import mixedSconesBox from './assets/images/mixed-scones-box.jpg'
import carrotCake from './assets/images/carrot-cake.jpg'
import lemonCake from './assets/images/lemon-cake.jpg'

// Mock design images
import greenCake from './assets/images/green cake.jpg'
import greenCupcakes from './assets/images/green cupcakes.jpg'
import pinkCake from './assets/images/pink cake.jpg'
import pinkCupcakes from './assets/images/pink cupcakes.jpg'
import purpleCake from './assets/images/purple cake.jpg'
import purpleCupcakes from './assets/images/purple cupcakes.jpg'
import redCake from './assets/images/red cake.jpg'
import whiteCreamCupcake from './assets/images/white cream cupcakes.jpg'
import yellowCake from './assets/images/yellow cake.jpg'
import yellowCupcakes from './assets/images/yellow cupcakes.jpg'

const CAKE_BASE_PRICES = {
  '12': { 2: 5000, 3: 6000 },
  '15': { 2: 7000, 3: 8000 },
  '18': { 2: 9000, 3: 10000 },
}

const CUPCAKE_BASE_PRICES = {
  6: 2400,
  12: 4800,
  18: 7200,
}

const SUMMER_BAKE_PRICES = {
  scones: 2500,
  carrotCake: 3500,
  lemonCake: 3500,
}

const TOPPING_PRICES = {
  none: 0,
  ferrero: 500,
  lindt: 700,
  oreo: 300,
}

const DRIP_PRICES = {
  none: 0,
  milk: 350,
  white: 500,
}

const DELIVERY_LABELS = {
  yokohama: 'Pick-up / Meet-up within Yokohama (JR line / Odakyu line) - Free',
  tokyo: 'Tokyo area - customer shares train station',
  yamato: 'Yamato delivery - cash on delivery',
}

const PRODUCT_LABELS = {
  scones: 'Summer Scone Box',
  carrotCake: 'Carrot Cake',
  lemonCake: 'Lemon Cake',
  cake: 'Decorated Cake',
  cupcakes: 'Cupcakes',
}

const SCONE_TYPE_LABELS = {
  plain: 'Plain scones',
  blueberry: 'Blueberry scones',
  mixed: 'Mixed box - plain & blueberry',
}

const JAM_FLAVOUR_LABELS = {
  strawberry: 'Strawberry jam',
  blueberry: 'Blueberry jam',
}

const COLOR_THEME_STYLES = {
  red: {
    label: 'Red',
    dot: 'bg-red-500',
    pill: 'bg-red-50 text-red-700 border-red-200',
  },
  yellow: {
    label: 'Yellow',
    dot: 'bg-yellow-400',
    pill: 'bg-yellow-50 text-yellow-700 border-yellow-200',
  },
  green: {
    label: 'Green',
    dot: 'bg-green-500',
    pill: 'bg-green-50 text-green-700 border-green-200',
  },
  purple: {
    label: 'Purple',
    dot: 'bg-purple-500',
    pill: 'bg-purple-50 text-purple-700 border-purple-200',
  },
  pink: {
    label: 'Pink',
    dot: 'bg-pink-400',
    pill: 'bg-pink-50 text-pink-700 border-pink-200',
  },
  white: {
    label: 'White',
    dot: 'bg-white border border-gray-400',
    pill: 'bg-gray-50 text-gray-700 border-gray-300',
  },
}

const cakePreviewMap = {
  red: redCake,
  yellow: yellowCake,
  green: greenCake,
  purple: purpleCake,
  pink: pinkCake,
  white: birthdayTopperCake,
}

const cupcakePreviewMap = {
  red: redCupcakesBox,
  yellow: yellowCupcakes,
  green: greenCupcakes,
  purple: purpleCupcakes,
  pink: pinkCupcakes,
  white: whiteCreamCupcake,
}

const sconePreviewMap = {
  plain: plainScones,
  blueberry: blueberryScones,
  mixed: mixedSconesBox,
}

function getMinPickupDate() {
  const today = new Date()
  today.setDate(today.getDate() + 7)
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0')
  const day = String(today.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export default function App() {
  const [showThankYou, setShowThankYou] = useState(false)
  const minPickupDate = useMemo(() => getMinPickupDate(), [])

  const categories = [
    {
      title: 'Plain Scone Box',
      text: '6 freshly baked plain scones packed beautifully with cream and your choice of strawberry or blueberry jam.',
      image: plainScones,
    },
    {
      title: 'Blueberry Scone Box',
      text: '6 blueberry scones packed with cream and your preferred jam flavour. Perfect for gifting and tea time.',
      image: blueberryScones,
    },
    {
      title: 'Carrot & Lemon Cakes',
      text: 'Soft carrot cake and zesty lemon cake available as summer baked goods for courier delivery.',
      image: lemonCake,
    },
  ]

  const bestSellers = [
    {
      name: 'Plain Scone Box',
      price: 'From ¥2,500',
      desc: '6 freshly baked plain scones served with cream and your choice of jam.',
      image: plainScones,
    },
    {
      name: 'Blueberry Scone Box',
      price: 'From ¥2,500',
      desc: '6 blueberry scones served with cream and strawberry or blueberry jam.',
      image: blueberryScones,
    },
    {
      name: 'Carrot Cake',
      price: 'From ¥3,500',
      desc: 'Soft spiced carrot cake with a rich homemade flavor and moist texture.',
      image: carrotCake,
    },
    {
      name: 'Lemon Cake',
      price: 'From ¥3,500',
      desc: 'Light lemon cake with fresh citrus flavor, perfect for summer orders.',
      image: lemonCake,
    },
  ]

  const gallery = [
    mixedSconesBox,
    plainScones,
    blueberryScones,
    carrotCake,
    lemonCake,
    greenCake,
    pinkCake,
    purpleCake,
  ]

  const testimonials = [
    {
      quote: 'The cake was soft, beautiful, and exactly what I wanted.',
      name: 'Happy customer',
    },
    {
      quote: 'Everything looked elegant and tasted amazing.',
      name: 'Birthday client',
    },
    {
      quote: 'The cupcakes were so pretty and perfect for gifting.',
      name: 'Returning customer',
    },
  ]

  const [order, setOrder] = useState({
    customerName: '',
    customerWhatsapp: '',
    productType: 'scones',
    sconeType: 'mixed',
    jamFlavour: 'strawberry',
    occasion: 'gift',
    occasionOther: '',
    flavor: 'vanilla',
    size: '12',
    layers: 2,
    cupcakeQuantity: 6,
    cream: 'american',
    colorTheme: 'red',
    topping: 'none',
    drip: 'none',
    wantsCandles: false,
    candleAge: '',
    wantsWriting: false,
    message: '',
    pickupDate: '',
    deliveryOption: 'yamato',
    trainStation: '',
    shippingAddress: '',
    notes: '',
  })

  const updateField = (field, value) => {
    setOrder((prev) => {
      const next = {
        ...prev,
        [field]: value,
      }

      if (field === 'productType') {
        const isDecoratedChoice = value === 'cake' || value === 'cupcakes'
        const isSummerBakeChoice = value === 'scones' || value === 'carrotCake' || value === 'lemonCake'

        if (isDecoratedChoice && prev.deliveryOption === 'yamato') {
          next.deliveryOption = 'yokohama'
        }

        if (isSummerBakeChoice) {
          next.topping = 'none'
          next.drip = 'none'
          next.wantsCandles = false
          next.candleAge = ''
          next.wantsWriting = false
          next.message = ''
        }
      }

      return next
    })
  }

  const isCake = order.productType === 'cake'
  const isCupcakes = order.productType === 'cupcakes'
  const isScones = order.productType === 'scones'
  const isDecoratedItem = isCake || isCupcakes
  const isSummerBake = order.productType === 'scones' || order.productType === 'carrotCake' || order.productType === 'lemonCake'

  const priceBreakdown = useMemo(() => {
    let base = 0

    if (order.productType === 'cake') {
      base = CAKE_BASE_PRICES[order.size][order.layers]
    } else if (order.productType === 'cupcakes') {
      base = CUPCAKE_BASE_PRICES[order.cupcakeQuantity]
    } else {
      base = SUMMER_BAKE_PRICES[order.productType]
    }

    const topping = isDecoratedItem ? TOPPING_PRICES[order.topping] : 0
    const drip = isCake ? DRIP_PRICES[order.drip] : 0
    const total = base + topping + drip
    const deposit = Math.ceil(total * 0.5)

    return {
      base,
      topping,
      drip,
      total,
      deposit,
    }
  }, [order, isCake, isDecoratedItem])

  const customSummary = useMemo(() => {
    const toppingLabel =
      order.topping === 'none'
        ? 'No topping'
        : order.topping === 'ferrero'
          ? 'Ferrero Rocher'
          : order.topping === 'lindt'
            ? 'Lindt chocolates'
            : 'Oreos'

    const dripLabel =
      order.drip === 'none'
        ? 'No drip'
        : order.drip === 'milk'
          ? 'Milk chocolate drip'
          : 'White chocolate drip'

    const creamLabel =
      order.cream === 'american'
        ? 'American buttercream'
        : 'Swiss buttercream'

    const occasionLabel =
      order.occasion === 'other'
        ? order.occasionOther || 'Other'
        : order.occasion.charAt(0).toUpperCase() + order.occasion.slice(1)

    const colorThemeLabel =
      order.colorTheme.charAt(0).toUpperCase() + order.colorTheme.slice(1)

    const productTypeLabel = PRODUCT_LABELS[order.productType]
    const sconeTypeLabel = SCONE_TYPE_LABELS[order.sconeType]
    const jamFlavourLabel = JAM_FLAVOUR_LABELS[order.jamFlavour]

    return {
      toppingLabel,
      dripLabel,
      creamLabel,
      occasionLabel,
      colorThemeLabel,
      productTypeLabel,
      sconeTypeLabel,
      jamFlavourLabel,
    }
  }, [order])

  const orderMessage = useMemo(() => {
    const lines = [
      "Hello Mich'cakes, I would like to place an order.",
      '',
      `Name: ${order.customerName || '-'}`,
      `Customer WhatsApp: ${order.customerWhatsapp || '-'}`,
      '',
      'Order details:',
      `Product type: ${customSummary.productTypeLabel}`,
      `Occasion: ${customSummary.occasionLabel}`,
    ]

    if (isSummerBake) {
      lines.push('Summer item: Yes')
    }

    if (isScones) {
      lines.push(`Scone type: ${customSummary.sconeTypeLabel}`)
      lines.push(`Jam flavour: ${customSummary.jamFlavourLabel}`)
      lines.push('Includes: Cream and jam')
    }

    if (isCake) {
      lines.push(`Flavor: ${order.flavor}`)
      lines.push(`Cake size: ${order.size} cm`)
      lines.push(`Layers: ${order.layers}`)
      lines.push(`Cream: ${customSummary.creamLabel}`)
      lines.push(`Color theme: ${customSummary.colorThemeLabel}`)
      lines.push(`Topping: ${customSummary.toppingLabel}`)
      lines.push(`Drip: ${customSummary.dripLabel}`)
    }

    if (isCupcakes) {
      lines.push(`Flavor: ${order.flavor}`)
      lines.push(`Cupcake quantity: ${order.cupcakeQuantity}`)
      lines.push(`Cream: ${customSummary.creamLabel}`)
      lines.push(`Color theme: ${customSummary.colorThemeLabel}`)
      lines.push(`Topping: ${customSummary.toppingLabel}`)
      lines.push('Drip: Not applicable')
    }

    if (isDecoratedItem) {
      lines.push(`Candles: ${order.wantsCandles ? `Yes - Age ${order.candleAge || '-'}` : 'No'}`)
      lines.push(`Writing: ${order.wantsWriting ? order.message || '-' : 'No writing'}`)
    }

    lines.push(`Pickup / delivery date: ${order.pickupDate || '-'}`)
    lines.push(`Delivery: ${DELIVERY_LABELS[order.deliveryOption]}`)

    if (order.deliveryOption === 'yokohama' || order.deliveryOption === 'tokyo') {
      lines.push(`Train station: ${order.trainStation || '-'}`)
    }

    if (order.deliveryOption === 'yamato') {
      lines.push(`Delivery address: ${order.shippingAddress || '-'}`)
      lines.push('Courier note: Decorated cream cakes are not available for nationwide courier during summer.')
    }

    lines.push('')
    lines.push('Price summary:')
    lines.push(`Base price: ¥${priceBreakdown.base.toLocaleString()}`)

    if (isDecoratedItem) {
      lines.push(`Topping: ¥${priceBreakdown.topping.toLocaleString()}`)
      lines.push(`Drip: ${isCake ? `¥${priceBreakdown.drip.toLocaleString()}` : 'Not applicable'}`)
      lines.push('Writing: Free')
    }

    lines.push(`Total: ¥${priceBreakdown.total.toLocaleString()}`)
    lines.push(`50% deposit required via JP Post Bank: ¥${priceBreakdown.deposit.toLocaleString()}`)

    if (order.notes.trim()) {
      lines.push('')
      lines.push(`Notes: ${order.notes.trim()}`)
    }

    return lines.join('\n')
  }, [order, customSummary, priceBreakdown, isCake, isCupcakes, isDecoratedItem, isSummerBake, isScones])

  const whatsappUrl = useMemo(() => {
    return `https://wa.me/818033248816?text=${encodeURIComponent(orderMessage)}`
  }, [orderMessage])

  const emailUrl = useMemo(() => {
    const subject = encodeURIComponent("Order Request - Mich'cakes")
    const body = encodeURIComponent(orderMessage)
    return `mailto:rupfundemichelle@gmail.com?subject=${subject}&body=${body}`
  }, [orderMessage])

  const courierIsBlocked = isDecoratedItem && order.deliveryOption === 'yamato'

  const canSubmit =
    order.customerName.trim() &&
    order.customerWhatsapp.trim() &&
    order.pickupDate.trim() &&
    order.pickupDate >= minPickupDate &&
    (order.occasion !== 'other' || order.occasionOther.trim()) &&
    (!isDecoratedItem || !order.wantsCandles || order.candleAge.trim()) &&
    (!isDecoratedItem || !order.wantsWriting || order.message.trim()) &&
    !courierIsBlocked &&
    (
      order.deliveryOption === 'yamato'
        ? order.shippingAddress.trim()
        : order.trainStation.trim()
    )

  const selectedColorTheme =
    COLOR_THEME_STYLES[order.colorTheme] || COLOR_THEME_STYLES.red

  const previewImage =
    order.productType === 'scones'
      ? sconePreviewMap[order.sconeType] || mixedSconesBox
      : order.productType === 'carrotCake'
        ? carrotCake
        : order.productType === 'lemonCake'
          ? lemonCake
          : order.productType === 'cake'
            ? cakePreviewMap[order.colorTheme] || birthdayTopperCake
            : cupcakePreviewMap[order.colorTheme] || vanillaCupcakesBox

  const previewNote =
    isScones
      ? `${customSummary.sconeTypeLabel} with ${customSummary.jamFlavourLabel.toLowerCase()} and cream. Available for nationwide courier delivery.`
      : isSummerBake
        ? 'This summer baked good is available for nationwide courier delivery.'
        : order.productType === 'cake'
          ? 'Decorated cream cakes are available for Yokohama and Tokyo customers only during summer.'
          : 'Decorated cupcakes are available for Yokohama and Tokyo customers only during summer.'

  const handleWhatsappOrder = () => {
    if (!canSubmit) {
      alert('Please complete all required fields. During summer, decorated cakes and cupcakes are available only for Yokohama and Tokyo orders. Nationwide courier is only for non-decorated baked goods.')
      return
    }

    setShowThankYou(true)
    window.location.href = whatsappUrl
  }

  const handleEmailOrder = () => {
    if (!canSubmit) {
      alert('Please complete all required fields. During summer, decorated cakes and cupcakes are available only for Yokohama and Tokyo orders. Nationwide courier is only for non-decorated baked goods.')
      return
    }

    setShowThankYou(true)
    window.location.href = emailUrl
  }

  return (
    <div className="min-h-screen scroll-smooth bg-[#fcf7f3] text-[#4e342e]">
      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="bg-[#9b4747] px-6 py-3 text-center text-sm font-medium text-white">
        Summer Notice: Decorated cream cakes are currently available only for customers in Yokohama & Tokyo.
        Nationwide courier delivery is available only for non-decorated baked goods such as scones, carrot cake, and lemon cake.
      </div>

      <header className="sticky top-0 z-50 border-b border-[#eadfd8] bg-[#fcf7f3]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Mich'cakes</h1>
            <p className="text-sm text-[#8b6f65]">Summer bakes & elegant homemade cakes</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-[#8f3d3d]">Home</a>
            <a href="#shop" className="transition hover:text-[#8f3d3d]">Summer Menu</a>
            <a href="#builder" className="transition hover:text-[#8f3d3d]">Order</a>
            <a href="#gallery" className="transition hover:text-[#8f3d3d]">Gallery</a>
            <a href="#contact" className="transition hover:text-[#8f3d3d]">Contact</a>
          </nav>

          <a
            href="#builder"
            className="rounded-full bg-[#9b4747] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Order Now
          </a>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-10"
        >
          <div>
            <span className="inline-block rounded-full bg-[#f7ece6] px-4 py-2 text-sm text-[#8b6f65]">
              Summer menu now available
            </span>

            <h2 className="mt-6 max-w-xl text-5xl font-bold leading-tight md:text-6xl">
              Fresh summer bakes made for gifting, tea time, and special moments
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#7d6259]">
              This summer, enjoy plain scones, blueberry scones, soft carrot cake, and zesty lemon cake available for courier delivery across Japan. Decorated cakes are currently available only within Yokohama and Tokyo.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#shop"
                className="rounded-full bg-[#9b4747] px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Shop Summer Menu
              </a>
              <a
                href="#builder"
                className="rounded-full border border-[#b89789] px-6 py-3 font-medium transition hover:bg-white"
              >
                Place an Order
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#8b6f65]">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Plain scones</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Blueberry scones</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Strawberry or blueberry jam</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">50% deposit required</span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={mixedSconesBox}
                alt="Boxed plain and blueberry scones with cream and jam"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="text-sm text-[#8b6f65]">This season’s featured bake</p>
              <p className="font-semibold">Scones boxed with cream & your choice of jam</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="rounded-[2rem] bg-white p-8 text-center shadow-sm ring-1 ring-[#f0e5de] lg:p-10">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a28173]">
              Summer Collection
            </p>
            <h3 className="mt-3 text-4xl font-bold">
              Seasonal baked goods available for delivery
            </h3>
            <p className="mx-auto mt-4 max-w-3xl leading-7 text-[#7d6259]">
              Our current summer menu features plain scones, blueberry scones, carrot cake, and lemon cake.
              Scone boxes include cream and your choice of strawberry or blueberry jam. Decorated cream cakes
              are available only for Yokohama and Tokyo customers during summer.
            </p>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a28173]">
              Summer Menu
            </p>
            <h3 className="mt-3 text-3xl font-bold">This season’s baked goods</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#f0e5de]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-60 w-full object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold">{item.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-[#7d6259]">{item.text}</p>
                  <a
                    href="#builder"
                    className="mt-5 inline-block rounded-full border border-[#d8c3b7] px-4 py-2 text-sm font-medium transition hover:bg-[#fcf3ee]"
                  >
                    Order
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-[#a28173]">
                Featured items
              </p>
              <h3 className="mt-3 text-3xl font-bold">Most-loved summer treats</h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {bestSellers.map((cake) => (
              <div
                key={cake.name}
                className="overflow-hidden rounded-[1.75rem] bg-white shadow-sm ring-1 ring-[#f0e5de]"
              >
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="h-64 w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold">{cake.name}</h4>
                  <p className="mt-2 text-sm leading-6 text-[#7d6259]">{cake.desc}</p>
                  <p className="mt-4 font-semibold text-[#4e342e]">{cake.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="builder" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a28173]">
              Order Builder
            </p>
            <h3 className="mt-3 text-3xl font-bold">Build your order your way</h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#7d6259]">
              Choose from this season’s baked goods or decorated cakes for Yokohama and Tokyo customers.
              During summer, nationwide courier is only available for non-decorated baked goods.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#f0e5de] lg:p-10">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.25em] text-[#a28173]">
                  Order form
                </p>
                <h3 className="mt-3 text-3xl font-bold">Create your order</h3>
                <p className="mt-3 text-sm leading-6 text-[#7d6259]">
                  50% deposit required via JP Post Bank before the order is confirmed.
                </p>
              </div>

              <div className="mb-6 rounded-2xl border border-[#e8d5cb] bg-[#fff8f4] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9b4747]">
                  Summer delivery note
                </p>
                <p className="mt-2 text-sm leading-6 text-[#7d6259]">
                  Decorated cream cakes and decorated cupcakes are not available for long-distance courier during summer.
                  Yokohama and Tokyo customers can still order decorated items. Nationwide courier is available only for non-decorated baked goods.
                </p>
              </div>

              <div className="mb-6 rounded-2xl border border-[#e8d5cb] bg-[#fff8f4] p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#9b4747]">
                  Please note
                </p>
                <p className="mt-2 text-sm leading-6 text-[#7d6259]">
                  Orders must be placed at least <span className="font-semibold text-[#4e342e]">7 days in advance</span>.
                  The earliest available pickup or delivery date you can choose is <span className="font-semibold text-[#4e342e]">{minPickupDate}</span>.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium">Your name</label>
                  <input
                    type="text"
                    value={order.customerName}
                    onChange={(e) => updateField('customerName', e.target.value)}
                    className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Your WhatsApp number</label>
                  <input
                    type="text"
                    value={order.customerWhatsapp}
                    onChange={(e) => updateField('customerWhatsapp', e.target.value)}
                    className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                    placeholder="e.g. 08012345678"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Product type</label>
                  <select
                    value={order.productType}
                    onChange={(e) => updateField('productType', e.target.value)}
                    className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                  >
                    <option value="scones">Scone Box</option>
                    <option value="carrotCake">Carrot Cake</option>
                    <option value="lemonCake">Lemon Cake</option>
                    <option value="cake">Decorated Cake - Yokohama / Tokyo only</option>
                    <option value="cupcakes">Decorated Cupcakes - Yokohama / Tokyo only</option>
                  </select>
                </div>

                {isScones && (
                  <>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Scone type</label>
                      <select
                        value={order.sconeType}
                        onChange={(e) => updateField('sconeType', e.target.value)}
                        className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                      >
                        <option value="plain">Plain scones</option>
                        <option value="blueberry">Blueberry scones</option>
                        <option value="mixed">Mixed box - plain & blueberry</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">Jam flavour</label>
                      <select
                        value={order.jamFlavour}
                        onChange={(e) => updateField('jamFlavour', e.target.value)}
                        className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                      >
                        <option value="strawberry">Strawberry jam</option>
                        <option value="blueberry">Blueberry jam</option>
                      </select>
                    </div>
                  </>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium">Occasion</label>
                  <select
                    value={order.occasion}
                    onChange={(e) => updateField('occasion', e.target.value)}
                    className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                  >
                    <option value="gift">Gift</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="tea time">Tea time</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {order.occasion === 'other' && (
                  <div>
                    <label className="mb-2 block text-sm font-medium">Other occasion</label>
                    <input
                      type="text"
                      value={order.occasionOther}
                      onChange={(e) => updateField('occasionOther', e.target.value)}
                      className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                      placeholder="Enter the occasion"
                    />
                  </div>
                )}

                {isDecoratedItem && (
                  <>
                    <div>
                      <label className="mb-2 block text-sm font-medium">Flavor</label>
                      <select
                        value={order.flavor}
                        onChange={(e) => updateField('flavor', e.target.value)}
                        className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                      >
                        <option value="vanilla">Vanilla</option>
                        <option value="chocolate">Chocolate</option>
                      </select>
                    </div>

                    {isCake ? (
                      <>
                        <div>
                          <label className="mb-2 block text-sm font-medium">Cake size</label>
                          <select
                            value={order.size}
                            onChange={(e) => updateField('size', e.target.value)}
                            className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                          >
                            <option value="12">12 cm</option>
                            <option value="15">15 cm</option>
                            <option value="18">18 cm</option>
                          </select>
                        </div>

                        <div>
                          <label className="mb-2 block text-sm font-medium">Layers</label>
                          <select
                            value={order.layers}
                            onChange={(e) => updateField('layers', Number(e.target.value))}
                            className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                          >
                            <option value={2}>2 layers</option>
                            <option value={3}>3 layers</option>
                          </select>
                        </div>
                      </>
                    ) : (
                      <div>
                        <label className="mb-2 block text-sm font-medium">Cupcake quantity</label>
                        <select
                          value={order.cupcakeQuantity}
                          onChange={(e) => updateField('cupcakeQuantity', Number(e.target.value))}
                          className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                        >
                          <option value={6}>6 cupcakes</option>
                          <option value={12}>12 cupcakes</option>
                          <option value={18}>18 cupcakes</option>
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="mb-2 block text-sm font-medium">Cream</label>
                      <select
                        value={order.cream}
                        onChange={(e) => updateField('cream', e.target.value)}
                        className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                      >
                        <option value="american">American buttercream</option>
                        <option value="swiss">Swiss buttercream</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">Preferred color theme</label>
                      <select
                        value={order.colorTheme}
                        onChange={(e) => updateField('colorTheme', e.target.value)}
                        className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                      >
                        <option value="red">Red</option>
                        <option value="yellow">Yellow</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                        <option value="pink">Pink</option>
                        <option value="white">White</option>
                      </select>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-medium">Topping</label>
                      <select
                        value={order.topping}
                        onChange={(e) => updateField('topping', e.target.value)}
                        className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                      >
                        <option value="none">No topping</option>
                        <option value="ferrero">Ferrero Rocher (+¥500)</option>
                        <option value="lindt">Lindt chocolates (+¥700)</option>
                        <option value="oreo">Oreos (+¥300)</option>
                      </select>
                    </div>

                    {isCake && (
                      <div>
                        <label className="mb-2 block text-sm font-medium">Chocolate drip</label>
                        <select
                          value={order.drip}
                          onChange={(e) => updateField('drip', e.target.value)}
                          className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                        >
                          <option value="none">No drip</option>
                          <option value="milk">Milk chocolate drip (+¥350)</option>
                          <option value="white">White chocolate drip (+¥500)</option>
                        </select>
                      </div>
                    )}
                  </>
                )}

                <div>
                  <label className="mb-2 block text-sm font-medium">Pickup / delivery date</label>
                  <input
                    type="date"
                    min={minPickupDate}
                    value={order.pickupDate}
                    onChange={(e) => updateField('pickupDate', e.target.value)}
                    className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                  />
                  <p className="mt-2 text-xs text-[#8b6f65]">
                    Earliest available date: {minPickupDate}
                  </p>
                </div>
              </div>

              {isDecoratedItem && (
                <div className="mt-6 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#fff8f4] p-5">
                    <label className="flex items-center gap-3 text-sm font-medium">
                      <input
                        type="checkbox"
                        checked={order.wantsCandles}
                        onChange={(e) => updateField('wantsCandles', e.target.checked)}
                      />
                      Free birthday candles
                    </label>

                    {order.wantsCandles && (
                      <div className="mt-4">
                        <label className="mb-2 block text-sm font-medium">Age for candles</label>
                        <input
                          type="text"
                          value={order.candleAge}
                          onChange={(e) => updateField('candleAge', e.target.value)}
                          className="w-full rounded-xl border border-[#dfd2ca] bg-white px-4 py-3 outline-none focus:border-[#9b4747]"
                          placeholder="e.g. 25"
                        />
                      </div>
                    )}
                  </div>

                  <div className="rounded-2xl bg-[#fff8f4] p-5">
                    <label className="flex items-center gap-3 text-sm font-medium">
                      <input
                        type="checkbox"
                        checked={order.wantsWriting}
                        onChange={(e) => updateField('wantsWriting', e.target.checked)}
                      />
                      Free writing
                    </label>

                    {order.wantsWriting && (
                      <div className="mt-4">
                        <label className="mb-2 block text-sm font-medium">
                          {isCake ? 'Cake message' : 'Message / label text'}
                        </label>
                        <input
                          type="text"
                          value={order.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          className="w-full rounded-xl border border-[#dfd2ca] bg-white px-4 py-3 outline-none focus:border-[#9b4747]"
                          placeholder="e.g. Happy Birthday Michelle"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <label className="mb-3 block text-sm font-medium">Delivery option</label>

                <div className="space-y-3">
                  <label className="flex items-start gap-3 rounded-xl border border-[#eadfd8] bg-[#fffdfb] p-4">
                    <input
                      type="radio"
                      name="delivery"
                      checked={order.deliveryOption === 'yokohama'}
                      onChange={() => updateField('deliveryOption', 'yokohama')}
                    />
                    <span className="w-full">
                      <span className="block font-medium">Pick-up / Yokohama meet-up</span>
                      <span className="block text-sm text-[#7d6259]">
                        We can meet anywhere within Yokohama for free (JR line / Odakyu line). Decorated cakes are available for this option.
                      </span>

                      {order.deliveryOption === 'yokohama' && (
                        <div className="mt-3">
                          <label className="mb-2 block text-sm font-medium">Train station</label>
                          <input
                            type="text"
                            value={order.trainStation}
                            onChange={(e) => updateField('trainStation', e.target.value)}
                            className="w-full rounded-xl border border-[#dfd2ca] bg-white px-4 py-3 outline-none focus:border-[#9b4747]"
                            placeholder="Enter your preferred station"
                          />
                        </div>
                      )}
                    </span>
                  </label>

                  <label className="flex items-start gap-3 rounded-xl border border-[#eadfd8] bg-[#fffdfb] p-4">
                    <input
                      type="radio"
                      name="delivery"
                      checked={order.deliveryOption === 'tokyo'}
                      onChange={() => updateField('deliveryOption', 'tokyo')}
                    />
                    <span className="w-full">
                      <span className="block font-medium">Tokyo area</span>
                      <span className="block text-sm text-[#7d6259]">
                        Please enter your train station. Decorated cakes are available for Tokyo customers during summer.
                      </span>

                      {order.deliveryOption === 'tokyo' && (
                        <div className="mt-3">
                          <label className="mb-2 block text-sm font-medium">Train station</label>
                          <input
                            type="text"
                            value={order.trainStation}
                            onChange={(e) => updateField('trainStation', e.target.value)}
                            className="w-full rounded-xl border border-[#dfd2ca] bg-white px-4 py-3 outline-none focus:border-[#9b4747]"
                            placeholder="Enter your station"
                          />
                        </div>
                      )}
                    </span>
                  </label>

                  <label className={`flex items-start gap-3 rounded-xl border p-4 ${courierIsBlocked ? 'border-[#d99] bg-[#fff1f1]' : 'border-[#eadfd8] bg-[#fffdfb]'}`}>
                    <input
                      type="radio"
                      name="delivery"
                      checked={order.deliveryOption === 'yamato'}
                      onChange={() => updateField('deliveryOption', 'yamato')}
                      disabled={isDecoratedItem}
                    />
                    <span className="w-full">
                      <span className="block font-medium">Yamato delivery</span>
                      <span className="block text-sm text-[#7d6259]">
                        Cash on delivery. Available for non-decorated baked goods only during summer.
                      </span>
                      <span className="mt-2 block text-xs font-medium text-[#9b4747]">
                        Decorated cream cakes and decorated cupcakes are NOT available for nationwide courier delivery during summer.
                      </span>

                      {order.deliveryOption === 'yamato' && (
                        <div className="mt-3">
                          <label className="mb-2 block text-sm font-medium">Delivery address</label>
                          <textarea
                            value={order.shippingAddress}
                            onChange={(e) => updateField('shippingAddress', e.target.value)}
                            rows={3}
                            className="w-full rounded-xl border border-[#dfd2ca] bg-white px-4 py-3 outline-none focus:border-[#9b4747]"
                            placeholder="Enter your full delivery address"
                          />
                        </div>
                      )}
                    </span>
                  </label>
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-2 block text-sm font-medium">Notes</label>
                <textarea
                  value={order.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                  placeholder="Add any notes, preferred delivery time, allergies, flavor requests, or style inspiration."
                />
                <p className="mt-2 text-sm text-[#8b6f65]">
                  Photo upload can be added later.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <p className="text-sm font-medium text-[#7d6259]">
                  Choose how you want to submit your order:
                </p>

                <div className="flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={handleWhatsappOrder}
                    className={`rounded-full px-6 py-3 font-medium text-white shadow-sm transition ${
                      canSubmit
                        ? 'bg-[#25D366] hover:opacity-90'
                        : 'cursor-not-allowed bg-[#c7a5a5]'
                    }`}
                  >
                    Submit on WhatsApp
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailOrder}
                    className={`rounded-full px-6 py-3 font-medium text-white shadow-sm transition ${
                      canSubmit
                        ? 'bg-[#9b4747] hover:opacity-90'
                        : 'cursor-not-allowed bg-[#c7a5a5]'
                    }`}
                  >
                    Submit by Email
                  </button>
                </div>

                <a
                  href="#home"
                  className="inline-block rounded-full border border-[#d8c3b7] px-6 py-3 font-medium transition hover:bg-[#fcf3ee]"
                >
                  Back to top
                </a>
              </div>

              {!canSubmit && (
                <p className="mt-3 text-sm text-[#9b4747]">
                  Please add your name, WhatsApp number, date at least 7 days ahead, required order details, and either a train station or delivery address. Decorated cakes/cupcakes cannot be selected for Yamato courier during summer.
                </p>
              )}

              {showThankYou && (
                <div className="mt-6 rounded-2xl bg-[#fff8f4] p-5 ring-1 ring-[#f0e5de]">
                  <h4 className="text-lg font-semibold">Thank you for your order request 💕</h4>
                  <p className="mt-2 text-sm leading-6 text-[#7d6259]">
                    Your order details have been prepared. WhatsApp opens a chat draft and Email opens a drafted email with your order details.
                  </p>
                </div>
              )}
            </div>

            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#f0e5de]">
              <p className="text-sm uppercase tracking-[0.25em] text-[#a28173]">
                Live order summary
              </p>
              <h3 className="mt-3 text-2xl font-bold">Your order</h3>

              {isDecoratedItem && (
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-sm font-medium text-[#7d6259]">Color theme:</span>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${selectedColorTheme.pill}`}
                  >
                    <span className={`h-3 w-3 rounded-full ${selectedColorTheme.dot}`}></span>
                    {selectedColorTheme.label}
                  </span>
                </div>
              )}

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#eee2db]">
                <img
                  src={previewImage}
                  alt={`${customSummary.productTypeLabel} preview`}
                  className="h-72 w-full object-cover"
                />
              </div>

              <p className="mt-3 text-sm text-[#8b6f65]">
                {previewNote}
              </p>

              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span>Product type</span>
                  <span className="font-medium">{customSummary.productTypeLabel}</span>
                </div>

                {isScones && (
                  <>
                    <div className="flex items-center justify-between">
                      <span>Scone type</span>
                      <span className="font-medium text-right">{customSummary.sconeTypeLabel}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Jam flavour</span>
                      <span className="font-medium">{customSummary.jamFlavourLabel}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Includes</span>
                      <span className="font-medium">Cream and jam</span>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between">
                  <span>Occasion</span>
                  <span className="font-medium">{customSummary.occasionLabel}</span>
                </div>

                {isDecoratedItem && (
                  <>
                    <div className="flex items-center justify-between">
                      <span>Flavor</span>
                      <span className="font-medium capitalize">{order.flavor}</span>
                    </div>

                    {isCake ? (
                      <>
                        <div className="flex items-center justify-between">
                          <span>Size</span>
                          <span className="font-medium">{order.size} cm</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <span>Layers</span>
                          <span className="font-medium">{order.layers}</span>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span>Cupcake quantity</span>
                        <span className="font-medium">{order.cupcakeQuantity}</span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span>Cream</span>
                      <span className="font-medium">{customSummary.creamLabel}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Color theme</span>
                      <span className="font-medium">{customSummary.colorThemeLabel}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Topping</span>
                      <span className="font-medium">{customSummary.toppingLabel}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Drip</span>
                      <span className="font-medium">
                        {isCake ? customSummary.dripLabel : 'Not applicable'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Writing</span>
                      <span className="font-medium">
                        {order.wantsWriting ? order.message || 'Message pending' : 'No writing'}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Candles</span>
                      <span className="font-medium">
                        {order.wantsCandles ? `Yes (${order.candleAge || '-'})` : 'No'}
                      </span>
                    </div>
                  </>
                )}

                <div className="flex items-center justify-between">
                  <span>Date</span>
                  <span className="font-medium">{order.pickupDate || '-'}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Delivery</span>
                  <span className="font-medium text-right">
                    {DELIVERY_LABELS[order.deliveryOption]}
                  </span>
                </div>

                {(order.deliveryOption === 'yokohama' || order.deliveryOption === 'tokyo') && (
                  <div className="flex items-center justify-between">
                    <span>Train station</span>
                    <span className="font-medium">{order.trainStation || '-'}</span>
                  </div>
                )}

                {order.deliveryOption === 'yamato' && (
                  <div className="flex items-start justify-between gap-4">
                    <span>Address</span>
                    <span className="text-right font-medium">{order.shippingAddress || '-'}</span>
                  </div>
                )}

                <div className="border-t border-[#eee2db] pt-4">
                  <div className="flex items-center justify-between">
                    <span>Base price</span>
                    <span>¥{priceBreakdown.base.toLocaleString()}</span>
                  </div>

                  {isDecoratedItem && (
                    <>
                      <div className="mt-3 flex items-center justify-between">
                        <span>Topping</span>
                        <span>¥{priceBreakdown.topping.toLocaleString()}</span>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <span>Drip</span>
                        <span>
                          {isCake
                            ? `¥${priceBreakdown.drip.toLocaleString()}`
                            : 'Not applicable'}
                        </span>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <span>Writing</span>
                        <span>Free</span>
                      </div>
                    </>
                  )}

                  <div className="mt-4 flex items-center justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>¥{priceBreakdown.total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-[#fff8f4] p-4">
                  <p className="text-sm text-[#7d6259]">50% deposit required via JP Post Bank</p>
                  <p className="mt-1 text-2xl font-bold text-[#9b4747]">
                    ¥{priceBreakdown.deposit.toLocaleString()}
                  </p>
                </div>

                <div className="rounded-2xl bg-[#f9f3ef] p-4 text-sm text-[#7d6259]">
                  <p className="font-medium text-[#4e342e]">Summer baked goods</p>
                  <p className="mt-2">Scone box: ¥{SUMMER_BAKE_PRICES.scones.toLocaleString()}</p>
                  <p className="mt-1 text-xs">Scone options: plain, blueberry, or mixed box</p>
                  <p className="mt-1 text-xs">Jam options: strawberry or blueberry</p>
                  <p className="mt-3">Carrot cake: ¥{SUMMER_BAKE_PRICES.carrotCake.toLocaleString()}</p>
                  <p>Lemon cake: ¥{SUMMER_BAKE_PRICES.lemonCake.toLocaleString()}</p>

                  <p className="mt-4 font-medium text-[#4e342e]">Decorated cakes - Yokohama / Tokyo only</p>
                  <p className="mt-2">12 cm: 2 layer ¥5,000 / 3 layer ¥6,000</p>
                  <p>15 cm: 2 layer ¥7,000 / 3 layer ¥8,000</p>
                  <p>18 cm: 2 layer ¥9,000 / 3 layer ¥10,000</p>

                  <p className="mt-4 font-medium text-[#4e342e]">Cupcakes - Yokohama / Tokyo only</p>
                  <p className="mt-2">6 cupcakes: ¥{CUPCAKE_BASE_PRICES[6].toLocaleString()}</p>
                  <p>12 cupcakes: ¥{CUPCAKE_BASE_PRICES[12].toLocaleString()}</p>
                  <p>18 cupcakes: ¥{CUPCAKE_BASE_PRICES[18].toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a28173]">
              Gallery preview
            </p>
            <h3 className="mt-3 text-3xl font-bold">Summer bakes and style gallery</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.5rem] shadow-sm ring-1 ring-[#f0e5de]"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="h-72 w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a28173]">
              Testimonials
            </p>
            <h3 className="mt-3 text-3xl font-bold">Kind words from clients</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-[#f0e5de]"
              >
                <p className="text-lg leading-8 text-[#5f4339]">“{item.quote}”</p>
                <p className="mt-6 text-sm font-medium text-[#8b6f65]">{item.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-[#eadfd8] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4 lg:px-10">
          <div>
            <h4 className="text-xl font-bold">Mich'cakes</h4>
            <p className="mt-3 text-sm leading-6 text-[#7d6259]">
              Summer baked goods and elegant homemade cakes for birthdays, gifts, and special occasions.
            </p>
          </div>

          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-4 space-y-2 text-sm text-[#7d6259]">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Summer Menu</a></li>
              <li><a href="#builder">Order Builder</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Order Info</h5>
            <ul className="mt-4 space-y-2 text-sm text-[#7d6259]">
              <li>50% deposit via JP Post Bank</li>
              <li>Orders require 7 days notice</li>
              <li>Scone jam options: strawberry / blueberry</li>
              <li>Summer courier: non-decorated bakes only</li>
              <li>Decorated cakes: Yokohama & Tokyo only</li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Contact</h5>
            <ul className="mt-4 space-y-2 text-sm text-[#7d6259]">
              <li>Email: rupfundemichelle@gmail.com</li>
              <li>WhatsApp: 08033248816</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
