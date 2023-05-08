import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import "../App.css"



function Statistics() {

  return (
    <div>



<iframe title="TT-Demo Report" width="2000" height="1000" src="https://app.powerbi.com/reportEmbed?reportId=f1282296-3ffb-4bad-8494-d1c4dc3a9df2&autoAuth=true&ctid=7fb802fd-7d9f-4a7f-b081-937a1477ae1b" frameborder="0" allowFullScreen="true"></iframe>

      {/* <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual and qna
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19", 
          tokenType: 1,
          accessToken: "H4sIAAAAAAAEAC2Wtw7sWA5E_-WlWqAltewCE8h775XJe-812H_fxmDSCwaXxSry_P3HTJ5-SvI___2DYDoCbFH52Je-TgLqdJCV2LjglCLvgQ-zEDmvaHtTQNgzkUfx6Fvtmw8TGjZNTyTVxCKMr5NZt58K91WdBu5FqZEOs9slBwkGdv37Qlzno-6J-EGK2Qj3BLrHq8R5mROsdlDAFypBXKL1M5xfuPa4bNeLIXLHiTabxa1EZmpnzcoclam8mYwcmbjT66PlFR6ohHtKyK5Wyj53i-fnnal9jxtdbUQR2aYxvtWOTkk8YOTuuKJ_dj4YQJaYIpiEP5Yg9pbupZx5J2dxZx6_7Di7BN8ETE85vchJaAFU2II4UHsHq9FdFEzXbYwgOjTVtY6heaRy-Nih2rEdR9GDp0BDRo6d_600eLsCEwsl7tQt4mYZOyLqNURGWTFM6hOFdjDYazOUofwU5q26QCWXZpdm7JzHaut6LmIa-ZOfNa8Oc2_zXauKUZ9PYpt8i-Go66r7tFKYte7jb-xmbjozEdDZ4CjpjZriXam5LRearOTInakQFCpFyUEXW2lAdFv5Tl-a7Z6ei45vhEPTrFGPaqFvDuWHsuDI9mV7GPE_90mzgX4pcL-wKEj4qXXN7Y4zpMGF7gqMxpBGhCtWFylVA8iwICOx3hnkdzaEBsbgpUl_xZLE7wNFvNz5hO_ovkun1ZgKfKNdPCeJxpyr9cW-Yxid8zWk8Hl46uGDZWNn9s05_Cxhne6kmdLVYa-WvAEU0NA69NWIJuG7jRGzhVqQOltdifdyu4hKRb24EvGlkoyEdOP69UUjcLJx9khUqIJXyfIrDIul_DDR1712X62i8t7UVUoHNKrVsAsAQikaa0lba80rEJYRcfg2zJXflNnWuGRq18trNFJqWW1gLzMb8jE19QeKFLx3tk4nNM9MpsfqW199YrvGtJFUYtn-JDDVEglSuAgcO1wYBMzg5Q-bkgo7uh5pz0-SDscBjibvO-311kzLhNRSy0PuDIlWk1L2Gi6jIZlxVztoRGHz1Dz3i6RM5Jz14S-yab13CiJMh2L001HiNma6f-FkZMs8rOcVdnzn6-LtgMHTZJao54FTMvRDC9G320htKrNepGYqCLAh_zpkIAPJPbImaEhRUua8ewP9xsU1h_jQLEx1XSsfgt8VAGwTaUleVeeXzXlp2zg20ojQRr4s1gM3RrF57_jySHOtp318MsawNf3X06rqkDU8ukO3BNwZYSckiKXRCnl1Cnkv-8y7kFE6mjMeUGAXpt0J8M94VliQenpoTxfRi56rjrrdujKN2VY42yX7WqVFRWixMpxsCcY4mFfGw6Q_bgdu7mDPM-GHOjylmGIfG_AstzdPIzi41kRiqyaeAu-i_uGZnZrYfnZULeaWxkf9MtbTZBiadNJg8UDoVP5txopxgLVm66eeNQDkR6FK4ouYeBap7S-oOX4eOMSXj8ZV_q71u00EElmxAY-_9YQ_q4JcYf3cohnxYnMhqhIQslcZRFfrw4HO93aPEIlGS32r_Stl45jLusJCcLIOZCJx9-kUC4eWS19k_DnC8A4d9Ipg9pnMeKA9uLcQJCsFtu1e2BxEvqVH5qicAcFJkfM0vwHihlUJtBYsJtZXIGUtMkJt0F4_sBKIpbqDMqiJL32DR9RS6wj1aBW9U3GZFgIzLCq5237D3YyRVGxqaTsEhwBCVtHWI4AYJHmlfX8clKfD8Jl4esm68KzEH2veN0H5HR2C_WT93FLp_jBFjMvr2lcEnau0J_mwPsvESmRYipO83A2a5GB4Zwrk-P20v_xO3nwN6QA2moxBHj9H4y5kTM_PrtiUPCeBOvdiH51nhK_WXYBUls-lkkQIV8oGM2PqTcDPB8RtGG0_dS94SDIsnLjoCcMVuc6NxTT3O4vQgvqw8DhleIRgKULuuw7zu5hoWXOw1FUEitKW6M9ZDgZpHHXo_YIWoC9Tm3DHyp1RhowmYHj6FfBdEaOrjOS_kMoAC8T6a8VUydfIoT9ypLqOA7bzIjnMkxPkFABd8bxmRpJK-0QkiNpJ6i6weFNq004Q7Hffa2bfIK4sbaSvkEGYl_cHO0504N7PrtiFiaMIye5Drz-z7Ni1d0rjCet1BH7tWjeQfWna73yyuTAA9mcFg-JeWeWHBMWVSI_-7QlAfbySy1DWJl2px1OG9e6p2lCk9-75wzhuu2lFLNP6p8xu7lbPFGOZJFuc4k5Q40rYkbh_zq-X621TvEET7KbLb2iGUTqQ3LpfGx9Q01nidXkeXkA7S_Gxm4zJQ7hGJAl5D8Pi4HXutoHn2O-aAerkcRRSGHf4QluRLkUTOQ7OC971fD9BI-jPZrDCrrTgE9w3nvXV8OpxDuS_D-rhxRkcC6of2BzUeoe1-Yw_19klUvF6jkl62pWiIZSCVO7uaLtzWJDCxuB5LZYqvn3qHUNn_WLKQBoKMNmHM4O1ULRqxHJ4pfMKfRQJu_ejI4IyORNNnkvbgXlJp6eYKt_BXryUA54yvBOi_Wd5EhHn-IH6668___nDrM-8T0rx_DANPuX5ajXJIl3WX62cAZQjsjw7-_DKqwOGBqTfwmUgsE3wBOK4ow6h-Dqw8OfCR0WQgOgZDB-HLAi4Opkm5N2nb9yEyDJI36ieDuuFDgtzqk6_H2aCImLP6nNcBmUD31LKNheWDOO39BVQ5Eu6KD5tvfNdLYXK6FODJrxj3GMQdqmBKqZAVDL5BWoan7FTb-F3ykZ0K_QTmCTckCO07wsDR-vhzS03EPv2zaRXVkSG8HD3rKC7jqr0ec1YR-IFRmJ-l0OqEpVlufuU2P7QT5s_4fiQy5hmNEWTovs6LELpU3-6pUZVXecHC_TAnJMF4hBde3K5CBK1K6fVl1vFDIU-dvKvzM9cF6vk_1TWddc8OCamKRQd1oCZTzyFrH-qnKYak_1Yi1_Z0nGnebTepx3bTX-rftqgwKPiJjiRL6k8u5lZePnC37lpGiqeC_e0UI79vB_Zj0EbPqTlBxiHK-arMj-KNhPLs2AzYvs5ozz6OYCuvO3z7-F2MEuu1wjiIvWbLJcRg4WIRftDbyTssJqBXaUSjXzt4uHBdD8e-TGijNSAJ0pzcn_VuYHC0JU-DMBErvhQGSWF1SZiHsBW6eOFr116NtmQ5eOI2o9CBYa5eH7ukqDJiXcPh072ZrOPTGrn5I-DmraLjVN3HAE6u0yO5iBFCE3CXXDKWjLZasiwnAN3P68D5vDaQEJUnJluHCcBuAhflOoPt1gVMk3-wHeSi-00yDJOiLLrJ_P__g8jEQd0mgwAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJleHAiOjE2ODI4NDkzMzgsImFsbG93QWNjZXNzT3ZlclB1YmxpY0ludGVybmV0Ijp0cnVlfQ==",
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
            background: models.BackgroundType.Transparent,
          }
        }}

       
        eventHandlers={
          new Map([
            ['loaded', function () { console.log('Report loaded'); }],
            ['rendered', function () { console.log('Report rendered'); }],
            ['error', function (event) { console.log(event.detail); }]
          ])
        }

        cssClassName={"Embed-container"}

        getEmbeddedComponent={(embeddedReport) => {
          // this.report = embeddedReport as Report; This is TS
          window.report = embeddedReport;
        }}
      /> */}
    </div>



  );
}

export default Statistics;
