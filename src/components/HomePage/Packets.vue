<template>
  <div class="container">
    <div class="row packets">
      <div class="col-sm-6">
        <div class="packets-left">
          <h1>A-Packets</h1>
          <h2>Online pcap file analyzer</h2>
          <p>
            Allow read and view pcap file online. Explore IPv4/IPv6, HTTP,
            Telnet, FTP, DNS, SSDP, WPA2 protocols details. You can build map of
            network structure and view nodes communications. Sniff and analyze
            network traffic and other pcap data.
          </p>
          <p>
            Analyse pcap files to view HTTP headers, request and response data.
            Extract transferred files, office documents, pictures. Find
            passwords for various protocols.
          </p>
          <hr />
          <div class="btn-holder d-flex">
            <router-link to="/pcaps" class="btn btn-lg btn-secondary mr-2"
              >View analyzed pcaps</router-link
            >
            <router-link to="/upload" class="btn btn-lg btn-primary"
              >Upload pcap file</router-link
            >
          </div>
        </div>
      </div>
      <div class="col-sm-6 video">
        <div class="video-wrapper">
          <iframe
            width="560"
            height="315"
            frameborder="0"
            src="https://www.youtube.com/embed/TVzLAmQvw_U"
            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/TVzLAmQvw_U?autoplay=1><img src=https://img.youtube.com/vi/TVzLAmQvw_U/hqdefault.jpg alt='A-Packets Online pcap analyzer overview'><span>▶</span></a>"
            allowfullscreen=""
            title="A-Packets Online pcap analyzer overview"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="packets-bottom mt-3">
      FEATURES
      <h4>
        Bring intellectual network traffic analysis into Cloud. Open pcap files
        online with our pcapng viewer.
      </h4>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "Packets-comp",
};
</script>

<style scoped>
.packets {
  color: #c5c2c2 !important;
  background: url(https://img.securityinfowatch.com/files/base/cygnus/siw/image/2020/01/bigstock__d_Rendering_Cloud_Computing__293174851.5e20e43ab6f65.png?auto=format&w=720);
  background-repeat: no-repeat;
  background-size: cover;
  padding: 30px 0;
  border-radius: 10px;
  opacity: 1.2;
}
.packets-left {
  margin: 20px;
}
.packets-left h1 {
  text-align: left;
  line-height: 1.2;
  font-size: 2.5rem;
  margin: 2.075rem 0;
  font-weight: 700;
  color: rgb(255 255 255);
}
.packets-left h2 {
  font-weight: 500;
  font-size: 2rem;
  margin: 2.075rem 0;
  color: rgb(255 255 255);
}
.video {
  display: flex;
  justify-content: center;
  align-items: center;
}
p {
  margin: 1.3rem 0;
  font-size: 1.3rem;
  text-shadow: 0px 1px 1px #1b1a1a;
  color: rgb(255 255 255);
}
hr {
  width: 80%;
}
.mr-2 {
  margin-right: 1.1rem;
}
img span {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  margin: auto;
}
.video-wrapper {
  border-radius: 0.25rem !important;
  display: block;
  margin-top: 0 !important;
  min-height: 300px;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-align: center !important;
  width: 100%;
}
.packets-bottom {
  text-align: center;
  color: #888;
}

.packets-bottom h4 {
  font-size: 1.1rem;
  font-weight: 100;
  color: #888;
  margin: 1.5rem 0;
}
hr {
  width: 100%;
}
</style>
