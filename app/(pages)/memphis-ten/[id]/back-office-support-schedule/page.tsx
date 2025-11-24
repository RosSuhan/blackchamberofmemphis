import style from './bossApp.module.css'

export default function BOSSForm(){
    return(
        <section
            className={style.bossAppSection}
        >
            {/* <div className="hb-p-6915f8f7efe61e0007d77c4f-1"></div><img height="1" width="1" style={"display:none"} src="https://www.honeybook.com/p.png?pid=6915f8f7efe61e0007d77c4f"/>
            <script>
            (function(h,b,s,n,i,p,e,t) {
                h._HB_ = h._HB_ || {};h._HB_.pid = i;;;;
                t=b.createElement(s);t.type="text/javascript";t.async=!0;t.src=n;
                e=b.getElementsByTagName(s)[0];e.parentNode.insertBefore(t,e);
            })(window,document,"script","https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js","6915f8f7efe61e0007d77c4f");
            </script> */}

            <iframe 
                src="https://remoting.hbportal.co/public/intro-bcom-boss" 
                frameBorder="0"
                width={"100%"}
                height={"700px"}
            ></iframe>
        </section>
    )
}