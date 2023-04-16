import Script from 'next/script'


export default function ChatPage() {
  return (
    <div>
      <Script type="text/javascript">
{`        (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
        v.onload = function() {
          window.voiceflow.chat.load({
            verify: { projectID: '643b0fec8f78850008907e2f' },
            url: 'https://general-runtime.voiceflow.com',
            versionID: 'production'
          });
      }
        v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
  `}
      </Script>
    </div>
  )
}