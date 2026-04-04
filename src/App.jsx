import { useMemo, useState } from 'react'
import birthdayTopperCake from './assets/images/birthday-topper-cake.jpg'
import birthdayRoseCake from './assets/images/birthday-rose-cake.jpg'
import redCupcakesBox from './assets/images/red-cupcakes-box.jpg'
import vanillaCupcakesBox from './assets/images/vanilla-cupcakes-box.jpg'

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

export default function App() {
  const [showThankYou, setShowThankYou] = useState(false)

  const categories = [
    {
      title: 'Celebration Cakes',
      text: 'Elegant cakes for birthdays, milestones, and special moments.',
      image: birthdayRoseCake,
    },
    {
      title: 'Cupcakes',
      text: 'Soft, beautiful cupcakes perfect for gifts, parties, and sweet treats.',
      image: redCupcakesBox,
    },
    {
      title: 'Custom Cakes',
      text: 'Designed with your colors, piping style, and special message in mind.',
      image: birthdayTopperCake,
    },
  ]

  const bestSellers = [
    {
      name: 'Birthday Rose Cake',
      price: 'From ¥5,000',
      desc: 'A soft celebration cake with romantic piping and birthday detailing.',
      image: birthdayRoseCake,
    },
    {
      name: 'Classic Birthday Cake',
      price: 'From ¥5,000',
      desc: 'Simple, elegant buttercream cake finished with a beautiful topper.',
      image: birthdayTopperCake,
    },
    {
      name: 'Red Velvet Cupcakes',
      price: 'From ¥2,400',
      desc: 'Bold red cupcakes with rich piped frosting for gifts and parties.',
      image: redCupcakesBox,
    },
    {
      name: 'Vanilla Pearl Cupcakes',
      price: 'From ¥2,400',
      desc: 'Soft vanilla cupcakes decorated with pearls and delicate floral piping.',
      image: vanillaCupcakesBox,
    },
  ]

  const gallery = [
    greenCake,
    pinkCake,
    purpleCake,
    redCake,
    yellowCake,
    greenCupcakes,
    pinkCupcakes,
    purpleCupcakes,
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
    productType: 'cake',
    occasion: 'birthday',
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
    deliveryOption: 'yokohama',
    trainStation: '',
    shippingAddress: '',
    notes: '',
  })

  const updateField = (field, value) => {
    setOrder((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const priceBreakdown = useMemo(() => {
    const isCake = order.productType === 'cake'

    const base = isCake
      ? CAKE_BASE_PRICES[order.size][order.layers]
      : CUPCAKE_BASE_PRICES[order.cupcakeQuantity]

    const topping = TOPPING_PRICES[order.topping]
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
  }, [order])

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

    const productTypeLabel =
      order.productType === 'cake' ? 'Cake' : 'Cupcakes'

    return {
      toppingLabel,
      dripLabel,
      creamLabel,
      occasionLabel,
      colorThemeLabel,
      productTypeLabel,
    }
  }, [order])

  const orderMessage = useMemo(() => {
    const isCake = order.productType === 'cake'

    const lines = [
      "Hello Mich'cakes, I would like to place an order.",
      '',
      `Name: ${order.customerName || '-'}`,
      `Customer WhatsApp: ${order.customerWhatsapp || '-'}`,
      '',
      'Order details:',
      `Product type: ${customSummary.productTypeLabel}`,
      `Occasion: ${customSummary.occasionLabel}`,
      `Flavor: ${order.flavor}`,
    ]

    if (isCake) {
      lines.push(`Cake size: ${order.size} cm`)
      lines.push(`Layers: ${order.layers}`)
      lines.push(`Drip: ${customSummary.dripLabel}`)
    } else {
      lines.push(`Cupcake quantity: ${order.cupcakeQuantity}`)
      lines.push('Drip: Not applicable')
    }

    lines.push(`Cream: ${customSummary.creamLabel}`)
    lines.push(`Color theme: ${customSummary.colorThemeLabel}`)
    lines.push(`Topping: ${customSummary.toppingLabel}`)
    lines.push(`Candles: ${order.wantsCandles ? `Yes - Age ${order.candleAge || '-'}` : 'No'}`)
    lines.push(`Writing: ${order.wantsWriting ? order.message || '-' : 'No writing'}`)
    lines.push(`Pickup date: ${order.pickupDate || '-'}`)
    lines.push(`Delivery: ${DELIVERY_LABELS[order.deliveryOption]}`)

    if (order.deliveryOption === 'yokohama' || order.deliveryOption === 'tokyo') {
      lines.push(`Train station: ${order.trainStation || '-'}`)
    }

    if (order.deliveryOption === 'yamato') {
      lines.push(`Delivery address: ${order.shippingAddress || '-'}`)
    }

    lines.push('')
    lines.push('Price summary:')
    lines.push(`Base price: ¥{priceBreakdown.base.toLocaleString()}`)
    lines.push(`Topping: ¥{priceBreakdown.topping.toLocaleString()}`)

    if (isCake) {
      lines.push(`Drip: ¥{priceBreakdown.drip.toLocaleString()}`)
    } else {
      lines.push('Drip: Not applicable')
    }

    lines.push('Writing: Free')
    lines.push(`Total: ¥{priceBreakdown.total.toLocaleString()}`)
    lines.push(`50% deposit required via JP Post Bank: ¥{priceBreakdown.deposit.toLocaleString()}`)

    if (order.notes.trim()) {
      lines.push('')
      lines.push(`Inspiration notes: ${order.notes.trim()}`)
    }

    return lines.join('\n')
  }, [order, customSummary, priceBreakdown])

  const whatsappUrl = useMemo(
    () => `https://wa.me/818033248816?text=${encodeURIComponent(orderMessage)}`,
    [orderMessage]
  )

  const emailUrl = useMemo(() => {
    const subject = encodeURIComponent("Cake Order Request - Mich'cakes")
    const body = encodeURIComponent(orderMessage)
    return `mailto:rupfundemichelle@gmail.com?subject=${subject}&body=${body}`
  }, [orderMessage])

  const canSubmit =
    order.customerName.trim() &&
    order.customerWhatsapp.trim() &&
    order.pickupDate.trim() &&
    (order.occasion !== 'other' || order.occasionOther.trim()) &&
    (!order.wantsCandles || order.candleAge.trim()) &&
    (!order.wantsWriting || order.message.trim()) &&
    (
      order.deliveryOption === 'yamato'
        ? order.shippingAddress.trim()
        : order.trainStation.trim()
    )

  const selectedColorTheme =
    COLOR_THEME_STYLES[order.colorTheme] || COLOR_THEME_STYLES.red

  const previewImage =
    order.productType === 'cake'
      ? cakePreviewMap[order.colorTheme] || birthdayTopperCake
      : cupcakePreviewMap[order.colorTheme] || vanillaCupcakesBox

  const previewNote =
    order.productType === 'cake'
      ? order.colorTheme === 'white'
        ? 'White cake mock has not been added yet, so a fallback cake preview is showing.'
        : 'This mock preview updates based on your selected cake color theme.'
      : 'This mock preview updates based on your selected cupcake color theme.'

  const handleWhatsappOrder = () => {
    if (!canSubmit) {
      alert('Please complete all required fields before submitting your order.')
      return
    }
    setShowThankYou(true)
    window.location.href = whatsappUrl
  }

  const handleEmailOrder = () => {
    if (!canSubmit) {
      alert('Please complete all required fields before submitting your order.')
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

      <header className="sticky top-0 z-50 border-b border-[#eadfd8] bg-[#fcf7f3]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Mich'cakes</h1>
            <p className="text-sm text-[#8b6f65]">Elegant homemade cakes</p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-[#8f3d3d]">Home</a>
            <a href="#shop" className="transition hover:text-[#8f3d3d]">Shop</a>
            <a href="#builder" className="transition hover:text-[#8f3d3d]">Custom Order Builder</a>
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
              Custom designs available
            </span>

            <h2 className="mt-6 max-w-xl text-5xl font-bold leading-tight md:text-6xl">
              Beautiful custom cakes made for your special moments
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-[#7d6259]">
              Elegant homemade cakes, cupcakes, and custom creations made with care for birthdays, gifts, and celebrations.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#builder"
                className="rounded-full bg-[#9b4747] px-6 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
              >
                Order a Cake
              </a>
              <a
                href="#builder"
                className="rounded-full border border-[#b89789] px-6 py-3 font-medium transition hover:bg-white"
              >
                Build a Custom Order
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#8b6f65]">
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Cakes & cupcakes</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">50% deposit required</span>
              <span className="rounded-full bg-white px-4 py-2 shadow-sm">Writing is free</span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-xl">
              <img
                src={birthdayRoseCake}
                alt="Birthday rose cake"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 left-6 rounded-2xl bg-white px-5 py-4 shadow-lg">
              <p className="text-sm text-[#8b6f65]">This week’s featured style</p>
              <p className="font-semibold">Birthday rose celebration cake</p>
            </div>
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-[#a28173]">
              Shop by category
            </p>
            <h3 className="mt-3 text-3xl font-bold">Choose how you want to order</h3>
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
                Best sellers
              </p>
              <h3 className="mt-3 text-3xl font-bold">Most-loved cakes</h3>
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
              Custom Order Builder
            </p>
            <h3 className="mt-3 text-3xl font-bold">Build your order your way</h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#7d6259]">
              Choose between a cake and cupcakes, then customize your order details. Your mock preview updates automatically when you choose a color.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-[#f0e5de] lg:p-10">
              <div className="mb-8">
                <p className="text-sm uppercase tracking-[0.25em] text-[#a28173]">
                  Order form
                </p>
                <h3 className="mt-3 text-3xl font-bold">Create your custom order</h3>
                <p className="mt-3 text-sm leading-6 text-[#7d6259]">
                  50% deposit required via JP Post Bank before the order is confirmed.
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
                    <option value="cake">Cake</option>
                    <option value="cupcakes">Cupcakes</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">Occasion</label>
                  <select
                    value={order.occasion}
                    onChange={(e) => updateField('occasion', e.target.value)}
                    className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                  >
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
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

                {order.productType === 'cake' ? (
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

                {order.productType === 'cake' && (
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

                <div>
                  <label className="mb-2 block text-sm font-medium">Pickup date</label>
                  <input
                    type="date"
                    value={order.pickupDate}
                    onChange={(e) => updateField('pickupDate', e.target.value)}
                    className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                  />
                </div>
              </div>

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
                        {order.productType === 'cake' ? 'Cake message' : 'Message / label text'}
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
                        We can meet anywhere within Yokohama for free (JR line / Odakyu line).
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
                        Please enter your train station.
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

                  <label className="flex items-start gap-3 rounded-xl border border-[#eadfd8] bg-[#fffdfb] p-4">
                    <input
                      type="radio"
                      name="delivery"
                      checked={order.deliveryOption === 'yamato'}
                      onChange={() => updateField('deliveryOption', 'yamato')}
                    />
                    <span className="w-full">
                      <span className="block font-medium">Yamato delivery</span>
                      <span className="block text-sm text-[#7d6259]">
                        Cash on delivery. Please enter your address below.
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
                <label className="mb-2 block text-sm font-medium">Inspiration notes</label>
                <textarea
                  value={order.notes}
                  onChange={(e) => updateField('notes', e.target.value)}
                  rows={4}
                  className="w-full rounded-xl border border-[#dfd2ca] bg-[#fffdfb] px-4 py-3 outline-none focus:border-[#9b4747]"
                  placeholder="Describe the style you want, colors, theme, topper ideas, flowers, piping style, or any inspiration for your order."
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
                  Please add your name, WhatsApp number, pickup date, required occasion/message/candle details, and either a train station or delivery address before submitting.
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
              <h3 className="mt-3 text-2xl font-bold">Your custom order</h3>

              <div className="mt-4 flex items-center gap-3">
                <span className="text-sm font-medium text-[#7d6259]">Color theme:</span>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium ${selectedColorTheme.pill}`}
                >
                  <span className={`h-3 w-3 rounded-full ${selectedColorTheme.dot}`}></span>
                  {selectedColorTheme.label}
                </span>
              </div>

              <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-[#eee2db]">
                <img
                  src={previewImage}
                  alt={`${order.colorTheme} ${order.productType} mock preview`}
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

                <div className="flex items-center justify-between">
                  <span>Occasion</span>
                  <span className="font-medium">{customSummary.occasionLabel}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Flavor</span>
                  <span className="font-medium capitalize">{order.flavor}</span>
                </div>

                {order.productType === 'cake' ? (
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
                    {order.productType === 'cake' ? customSummary.dripLabel : 'Not applicable'}
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

                <div className="flex items-center justify-between">
                  <span>Pickup date</span>
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

                  <div className="mt-3 flex items-center justify-between">
                    <span>Topping</span>
                    <span>¥{priceBreakdown.topping.toLocaleString()}</span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span>Drip</span>
                    <span>
                      {order.productType === 'cake'
                        ? `¥{priceBreakdown.drip.toLocaleString()}`
                        : 'Not applicable'}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between">
                    <span>Writing</span>
                    <span>Free</span>
                  </div>

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
                  <p className="font-medium text-[#4e342e]">Cake pricing</p>
                  <p className="mt-2">12 cm: 2 layer ¥5,000 / 3 layer ¥6,000</p>
                  <p>15 cm: 2 layer ¥7,000 / 3 layer ¥8,000</p>
                  <p>18 cm: 2 layer ¥9,000 / 3 layer ¥10,000</p>

                  <p className="mt-4 font-medium text-[#4e342e]">Cupcake pricing</p>
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
            <h3 className="mt-3 text-3xl font-bold">Mock style gallery</h3>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-[1.5rem] shadow-sm ring-1 ring-[#f0e5de]"
              >
                <img
                  src={image}
                  alt={`Mock gallery ${index + 1}`}
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
              Elegant homemade cakes for birthdays, gifts, and special occasions.
            </p>
          </div>

          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="mt-4 space-y-2 text-sm text-[#7d6259]">
              <li><a href="#home">Home</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#builder">Custom Order Builder</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold">Order Info</h5>
            <ul className="mt-4 space-y-2 text-sm text-[#7d6259]">
              <li>50% deposit via JP Post Bank</li>
              <li>Writing is free</li>
              <li>Yokohama meet-up free</li>
              <li>Yamato COD available</li>
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
