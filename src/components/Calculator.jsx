import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, Send, Sparkles } from 'lucide-react';
import { calculatorConfig, businessDetails } from '../data/siteData';

const SERVICE_CONFIGS = calculatorConfig.SERVICE_CONFIGS;

export default function Calculator({ onSubmitEstimate }) {
  const [selectedServiceId, setSelectedServiceId] = useState('invitation-cards');
  const [selectedOptionId, setSelectedOptionId] = useState('standard');
  const [quantity, setQuantity] = useState(250);
  
  // Dimensions for flex banners (default 6x4 feet = 24 sqft)
  const [width, setWidth] = useState(6);
  const [height, setHeight] = useState(4);

  const currentService = SERVICE_CONFIGS[selectedServiceId];

  // Whenever service changes, reset options and quantity to defaults
  useEffect(() => {
    const config = SERVICE_CONFIGS[selectedServiceId];
    setSelectedOptionId(config.options[0].id);
    setQuantity(config.defaultQty);
  }, [selectedServiceId]);

  const selectedOption = currentService.options.find(o => o.id === selectedOptionId) || currentService.options[0];

  // Calculate Base Price
  let basePrice = 0;
  let calculationDetails = '';

  if (currentService.hasDimensions) {
    // Price = Width * Height * optionRate * quantity (number of banners)
    const sqft = width * height;
    basePrice = sqft * selectedOption.price * quantity;
    calculationDetails = `${width} ft × ${height} ft = ${sqft} Sq. Ft. @ ₹${selectedOption.price}/sq.ft for ${quantity} banner(s)`;
  } else {
    basePrice = selectedOption.price * quantity;
    calculationDetails = `${quantity} items @ ₹${selectedOption.price}/pc`;
  }

  // Bulk discount matrix
  let discountPercentage = 0;
  if (!currentService.hasDimensions) {
    if (quantity >= 2500) discountPercentage = 15;
    else if (quantity >= 1000) discountPercentage = 10;
    else if (quantity >= 500) discountPercentage = 5;
  } else {
    const totalSqFt = width * height * quantity;
    if (totalSqFt >= 200) discountPercentage = 15;
    else if (totalSqFt >= 100) discountPercentage = 10;
    else if (totalSqFt >= 50) discountPercentage = 5;
  }

  const discountAmount = (basePrice * discountPercentage) / 100;
  const finalPrice = basePrice - discountAmount;

  const handleWhatsAppSend = () => {
    const specs = currentService.hasDimensions 
      ? `Dimensions: ${width}x${height} ft (${width * height} sq.ft), Material: ${selectedOption.name}`
      : `Quality: ${selectedOption.name}`;
      
    const message = `Hello Patna Printing Works! I used your website calculator to get an estimate:
- Service: ${currentService.name}
- ${specs}
- Quantity: ${quantity} ${currentService.qtyLabel}
- Calculation: ${calculationDetails}
- Est. Price: ₹${finalPrice.toFixed(0)} (After ${discountPercentage}% bulk discount)
Please contact me to discuss printing.`;

    const whatsappUrl = `https://wa.me/${businessDetails.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Also trigger parent callback to log/prefill if required
    if (onSubmitEstimate) {
      onSubmitEstimate({
        service: currentService.name,
        quantity: quantity,
        details: specs + `. Calc details: ${calculationDetails}. Estimated Total: ₹${finalPrice.toFixed(0)}`
      });
    }
  };

  return (
    <section id="calculator" className="relative w-full py-16 md:py-24 border-b-3 border-retro-charcoal bg-retro-card">
      <div className="absolute inset-0 dot-grid pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-retro-mustard retro-border-sm px-4 py-1.5 shadow-retro-sm">
            <CalcIcon className="w-5 h-5 text-retro-charcoal" />
            <span className="font-grotesk font-black text-sm tracking-widest text-retro-charcoal uppercase">
              Retro Calculator
            </span>
          </div>
          <h2 className="font-syne font-black text-3xl md:text-5xl text-retro-charcoal mt-6">
            ESTIMATE YOUR PRICE
          </h2>
          <p className="font-sans text-sm text-retro-charcoal/80 mt-2">
            Pick your service, select printing paper specs, set your quantity, and watch the bulk discount apply instantly!
          </p>
        </div>

        {/* Calculator Widget */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 retro-border bg-retro-cream p-6 md:p-10 retro-shadow-lg">
          
          {/* Inputs Section */}
          <div className="md:col-span-7 flex flex-col gap-6 text-left border-b-2 md:border-b-0 md:border-r-2 border-dashed border-retro-charcoal/30 pb-8 md:pb-0 md:pr-8">
            
            {/* Service Dropdown */}
            <div>
              <label htmlFor="calc-service" className="block font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider mb-2">
                1. Select Service Type
              </label>
              <select
                id="calc-service"
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
                className="w-full bg-retro-cream retro-border-sm p-3 font-grotesk font-bold text-retro-charcoal focus:outline-none focus:bg-retro-peach transition-all"
              >
                {Object.entries(SERVICE_CONFIGS).map(([id, config]) => (
                  <option key={id} value={id}>{config.name}</option>
                ))}
              </select>
            </div>

            {/* Printing Option Select */}
            <div>
              <label className="block font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider mb-2">
                2. Choose Paper / Print Quality
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentService.options.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setSelectedOptionId(opt.id)}
                    className={`text-left p-3 retro-border-sm font-grotesk font-bold flex flex-col justify-between transition-all ${
                      selectedOptionId === opt.id 
                        ? 'bg-retro-peach border-retro-charcoal shadow-retro-sm translate-y-[-1px]' 
                        : 'bg-retro-cream/50 text-retro-charcoal/80 hover:bg-retro-cream'
                    }`}
                  >
                    <span className="text-sm">{opt.name}</span>
                    <span className="text-xs text-retro-terracotta mt-1">₹{opt.price} {currentService.hasDimensions ? '/ sq.ft' : '/ pc'}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimension Inputs for Flex Banners */}
            {currentService.hasDimensions && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="width-input" className="block font-grotesk font-black text-xs text-retro-charcoal uppercase tracking-wider mb-2">
                    Banner Width (Feet)
                  </label>
                  <input
                    id="width-input"
                    type="number"
                    min="1"
                    max="100"
                    value={width}
                    onChange={(e) => setWidth(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-retro-cream retro-border-sm p-2 font-grotesk font-bold text-retro-charcoal focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="height-input" className="block font-grotesk font-black text-xs text-retro-charcoal uppercase tracking-wider mb-2">
                    Banner Height (Feet)
                  </label>
                  <input
                    id="height-input"
                    type="number"
                    min="1"
                    max="100"
                    value={height}
                    onChange={(e) => setHeight(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full bg-retro-cream retro-border-sm p-2 font-grotesk font-bold text-retro-charcoal focus:outline-none"
                  />
                </div>
              </div>
            )}

            {/* Quantity Slider & Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="qty-slider" className="font-grotesk font-black text-sm text-retro-charcoal uppercase tracking-wider">
                  3. Enter Quantity
                </label>
                <div className="flex items-center gap-2">
                  <input
                    id="qty-input"
                    type="number"
                    min={currentService.minQty}
                    max={currentService.maxQty}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(currentService.minQty, parseInt(e.target.value) || currentService.minQty))}
                    className="w-20 bg-retro-cream retro-border-sm p-1 text-center font-grotesk font-black text-sm text-retro-charcoal focus:outline-none"
                  />
                  <span className="font-grotesk text-xs text-retro-charcoal/60 font-bold">{currentService.qtyLabel}</span>
                </div>
              </div>
              <input
                id="qty-slider"
                type="range"
                min={currentService.minQty}
                max={currentService.maxQty}
                step={currentService.minQty >= 1000 ? 500 : currentService.minQty >= 100 ? 50 : 1}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full h-3 bg-retro-sand rounded-none border-2 border-retro-charcoal appearance-none cursor-pointer accent-retro-terracotta"
              />
              <div className="flex justify-between font-mono text-[10px] text-retro-charcoal/60 mt-1.5 font-bold">
                <span>MIN: {currentService.minQty}</span>
                <span>MAX: {currentService.maxQty}</span>
              </div>
            </div>

          </div>

          {/* Outputs/Reciept Section */}
          <div className="md:col-span-5 flex flex-col justify-between text-left">
            <div className="bg-retro-cream/80 retro-border-sm p-5 border-dashed border-2 border-retro-charcoal relative">
              
              {/* Receipt Visual Header */}
              <div className="text-center pb-4 mb-4 border-b-2 border-dashed border-retro-charcoal/30">
                <span className="font-mono text-xs uppercase tracking-widest font-black text-retro-charcoal/70">ESTIMATE RECEIPT</span>
                <p className="font-grotesk font-bold text-xs text-retro-terracotta mt-1">{currentService.name}</p>
              </div>

              {/* Specs Details */}
              <div className="space-y-3 font-grotesk text-xs text-retro-charcoal/80 mb-6">
                <div className="flex justify-between">
                  <span>Selected Option:</span>
                  <span className="font-bold text-right max-w-[150px] truncate">{selectedOption.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>Rates:</span>
                  <span className="font-bold">₹{selectedOption.price} {currentService.hasDimensions ? '/ sq.ft' : '/ pc'}</span>
                </div>
                {currentService.hasDimensions && (
                  <div className="flex justify-between">
                    <span>Banner Size:</span>
                    <span className="font-bold">{width} × {height} ft ({width * height} sq.ft)</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Total Quantity:</span>
                  <span className="font-bold">{quantity} {currentService.qtyLabel}</span>
                </div>
                <div className="flex justify-between border-t border-dashed border-retro-charcoal/30 pt-2">
                  <span>Subtotal Price:</span>
                  <span className="font-bold text-sm text-retro-charcoal">₹{basePrice.toFixed(0)}</span>
                </div>
                
                {/* Discount */}
                {discountPercentage > 0 && (
                  <div className="flex justify-between items-center bg-retro-peach p-1.5 retro-border-sm text-retro-terracotta">
                    <span className="flex items-center gap-1 font-bold">
                      <Sparkles className="w-3.5 h-3.5 fill-retro-terracotta text-retro-terracotta" />
                      Bulk Discount ({discountPercentage}%):
                    </span>
                    <span className="font-black">-₹{discountAmount.toFixed(0)}</span>
                  </div>
                )}
              </div>

              {/* Big Final Total */}
              <div className="bg-retro-cream p-4 retro-border-sm shadow-retro-sm text-center">
                <span className="font-grotesk font-bold text-xs text-retro-charcoal/60 uppercase block">ESTIMATED GRAND TOTAL</span>
                <span className="font-syne font-black text-3xl md:text-4xl text-retro-charcoal">
                  ₹{finalPrice.toFixed(0)}
                </span>
                <span className="font-mono text-[9px] block text-retro-charcoal/50 mt-1">EXCLUDING GST & DELIVERIES</span>
              </div>
            </div>

            {/* Send Action */}
            <div className="mt-6">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full retro-btn bg-retro-mustard hover:bg-retro-mustard/90 text-retro-charcoal text-base flex justify-center items-center gap-3 py-3.5 shadow-retro hover:shadow-retro-sm hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                <Send className="w-5 h-5" />
                <span>Submit to WhatsApp</span>
              </button>
              <span className="font-sans text-[10px] text-retro-charcoal/60 mt-2 block text-center italic">
                * Note: Prices are indicative. Press the button to verify availability, get discount proofs, or request customizations.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
