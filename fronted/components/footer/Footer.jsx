import Link from "next/link";
import React from 'react';
import styles from "../../styles/footer_styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.footerText}>
        <p>Louis Vuitton</p>
      </div>
      </div>
      <br />
      {/* <hr className={styles.hr} /> */}
      <br />
        <div className={styles.container1}>
        <div className={styles.footerLinks}>
          <br />
          <Link href={"/"}>United Kingdom</Link>
          <Link href={"/"}>Newsletter</Link>
          <Link href={"/"}>Contact Us</Link>
          <Link href={"/"}>FAQ</Link>
          <Link href={"/"}>Product Care</Link>
          <Link href={"/"}>Stores</Link>
          <Link href={"/"}>Sustainability</Link>
          <Link href={"/"}>Apps</Link>
          <Link href={"/"}>Follow Us</Link>
          <Link href={"/"}>MSA Transparency</Link>
          <Link href={"/"}>Legal & Privacy</Link>
          <Link href={"/"}>Cookies</Link>
          <Link href={"/"}>Careers</Link>
          <br />
          <br />
          <Link href={"/"}>+44 207 998 6286</Link>
        
      </div>
      </div>
    </footer>






    // <footer role="contentinfo" class="lv-footer lv-gutters lv-default-layout__footer">
    //   <div class="lv-footer-breadcrumb">
    //     <div class="lv-logo">
    //       <span class="lv-logo__wrap">
    //         <span>
    //           <svg width="151" height="16" viewBox="0 0 151 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    //             <path d="M67.637.293l3.816 9.205L75.269.293h2.725L71.746 15.39l-.293.294-.294-.294L64.911.293h2.726zm-13.712 0c1.468 0 2.86.767 3.627 1.887l-1.467 1.468h-.462c-.304-.65-.973-1.048-1.698-1.048-.863 0-1.672.71-1.72 1.614-.035.68.277 1.105.84 1.468.606.391.854.554 1.677 1.006.897.493 3.166 1.46 3.166 4.005 0 2.509-2.097 4.843-4.802 4.843-.347 0-.976-.039-1.446-.147-1.325-.321-2.129-.822-2.998-1.845l1.887-1.929.65.545c.293.23.937.693 1.55.776 1.246.169 2.082-.655 2.244-1.468.129-.642-.034-1.6-1.069-2.096 0 0-1.866-1.037-2.684-1.51-.833-.482-1.719-1.798-1.719-3.375 0-1.174.538-2.311 1.405-3.103.67-.614 1.589-1.09 3.019-1.09zM138.67 0l9.77 9.77V.587l.294-.294h1.929l.294.294v14.802h-.462l-9.602-9.602v9.309l-.294.293h-1.929l-.293-.293V.293L138.67 0zm-28.807.293v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zm9.225 0v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zM2.516.293v12.58h5.032v2.516H0V.587L.293.293h2.223zm14.257 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm111.54 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm-98.415 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.929l.293.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zm37.446 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.928l.294.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zM16.772 2.81a5.032 5.032 0 10.001 10.065 5.032 5.032 0 000-10.065zm111.541 0a5.032 5.032 0 100 10.065 5.032 5.032 0 000-10.065z" fill-rule="evenodd">
    //               </path>
    //               </svg>
    //                <span class="sr-only">Louis Vuitton</span>
    //                </span>
    //                </span>
    //                </div> 
    //                </div> 
    //                <div class="lv-footer-navigation">
    //                 <ul class="lv-list">
    //                   <li title="Ship to : United Kingdom - Change Country/Region" class="hide-on-small">
    //                     <a to="[object Object]" class="lv-smart-link lv-link flag-with-label" href="https://www.louisvuitton.com/dispatch?noDRP=true" aria-label="Ship to : United Kingdom - Change Country/Region">
    //                   {/* <img src="/flags/gb.svg" alt="" width="16" height="12" class="lv-flag">  */}
    //                       <span>United Kingdom</span>
    //                       </a>
    //                       </li> 
    //                       <li>
    //                         <a to="[object Object]" class="lv-smart-link lv-link" href="https://secure.louisvuitton.com/eng-gb/mylv/newsletter">
    //       Newsletter
    //     </a></li><li><a target="_blank" rel="external" to="[object Object]" class="lv-smart-link lv-link" href="/eng-gb/contact-us">
    //       Contact Us
    //     </a></li><li><a href="/eng-gb/faq" class="lv-smart-link lv-link">
    //       FAQ
    //     </a></li><li><a href="/eng-gb/care-service" class="lv-smart-link lv-link">
    //       Product Care
    //     </a></li><li><a target="_blank" rel="external" to="[object Object]" class="lv-smart-link lv-link" href="/eng-gb/stores">
    //       Stores
    //     </a></li><li><a target="_blank" rel="external" to="[object Object]" class="lv-smart-link lv-link" href="/eng-gb/magazine/sustainability">
    //       Sustainability
    //     </a></li><li><a target="_blank" rel="external" to="[object Object]" class="lv-smart-link lv-link" href="https://uk.louisvuitton.com/eng-gb/apps">
    //       Apps
    //     </a></li><li><button aria-expanded="false">
    //     Follow Us
    //   </button></li><li><button aria-expanded="false">
    //     MSA Transparency
    //   </button></li><li><a href="/eng-gb/legal-privacy" class="lv-smart-link lv-link">
    //       Legal &amp; Privacy
    //     </a></li><li><button onclick="openCCSettings()" class="lv-link">
    //     Cookies
    //   </button></li><li><a target="_blank" rel="external" to="[object Object]" class="lv-smart-link lv-link" href="https://jobs.louisvuitton.com/eng-e1/careers/home/">
    //       Careers
    //     </a></li><li><a target="_blank" rel="external" to="[object Object]" class="lv-smart-link lv-link" href="tel:+44 207 998 6286">
    //       +44 207 998 6286
    //     </a></li><li><button aria-expanded="false">
    //     Sitemap
    //   </button></li> </ul> 
    //   {/* <hr class="show-only-on-small">  */}
    //   <a href="/dispatch?noDRP=true" class="lv-smart-link lv-link show-only-on-small ship-to flag-with-label" title="Ship to : United Kingdom - Change Country/Region" aria-label="Ship to : United Kingdom - Change Country/Region"><span>Ship to :</span> 
    //   {/* <img src="/flags/gb.svg" alt="" width="16" height="12" class="lv-flag">  */}
    //   <span>United Kingdom</span></a></div>  <div tag="section" class="lv-footer-closable-panel lv-gutters" style="display: none;"><div tabindex="-1"></div> <div tabindex="-1"></div> <div data-lock=""><div class="lv-footer-closable-panel__header"><h2 class="lv-footer-closable-panel__title list-label-l">Sitemap</h2> <button aria-label="Close" class="lv-icon-button -no-fx"><svg focusable="false" aria-hidden="true" class="lv-icon"><use xlink:href="/_nuxt/364dc00d.icons.svg#sprite-controls-close"></use></svg></button></div> <ul class="lv-footer-folder-links lv-list lv-footer__panel-columns"><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/sitemap">Sitemap</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/men/watches-and-jewellery/watches/_/N-t1dp8ykh">Men's Designer Watches</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/women/fragrances/fragrances/_/N-t1pipf2k">Luxury Perfumes, Designer Fragrances</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/men/highlights-gifts/gifts-for-him/_/N-t1a3akdz">Luxury Gifts for Men</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/women/wallets-and-small-leather-goods/long-wallets/_/N-t1wnwc4o">Women's Designer Wallets</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/men/travel/all-luggage-and-accessories/_/N-tmo0xt8">Designer 4-Wheeled Smart Suitcase</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/women/travel/all-luggage-and-accessories/_/N-t193qm0">High-end Carry-on Luggage</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/women/shoes/all-shoes/_/N-t1mcbujj">Designer Shoes for Women</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/women/watches/watches/_/N-tc5t92d">Luxury Watches for Women</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/authentic-louis-vuitton">Authentic Louis Vuitton</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/louis-vuitton-outlet">Louis Vuitton Outlet, Luxury Discount</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/women/highlights-gifts/gifts-for-her/_/N-t1f399zr">Women's Luxury Gift Ideas</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/women/handbags/_/N-tfr7qdp">Luxury Handbags and Purses</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/men/shoes/sneakers/_/N-t1fud07g">Men's Designer Trainers</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/men/bags/leather-edit/_/N-t5t0c6f">Men's Designer Leather Bags</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/women/handbags/leather-bags-selection/_/N-t1qhwjt3">Women's Luxury Leather Bags</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/women/handbags/totes/_/N-th1qw6u">Women's Designer Tote Bags, Neverfull</a></li><li class="lv-footer-folder-links__item"><a to="[object Object]" class="lv-smart-link lv-link body-m" href="https://uk.louisvuitton.com/eng-gb/women/jewellery/all-fine-jewellery/_/N-t13mxv0j">Women's Luxury Fine Jewellery</a></li></ul> </div> <div tabindex="-1"></div></div>   <div tag="section" class="lv-footer-closable-panel lv-gutters" style="display: none;"><div tabindex="-1"></div> <div tabindex="-1"></div> <div data-lock=""><div class="lv-footer-closable-panel__header"> <button aria-label="Close" class="lv-icon-button -no-fx"><svg focusable="false" aria-hidden="true" class="lv-icon"><use xlink:href="/_nuxt/364dc00d.icons.svg#sprite-controls-close"></use></svg></button></div> <ul class="lv-footer-folder-links lv-list lv-footer__panel-columns"></ul> </div> <div tabindex="-1"></div></div></footer>

    
  );
}

export default Footer