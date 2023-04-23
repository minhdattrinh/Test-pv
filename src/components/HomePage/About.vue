<template>
  <div class="container">
    <div
      class="row mb-3 box-shadow1"
      v-for="(ListInfo, index) in ListInfos.slice(startIndex, endIndex)"
      :key="index"
    >
      <div class="col-sm-6 about">
        <div class="about-icon">
          <img :src="ListInfo.image" alt="image" />
        </div>
      </div>
      <div class="col-sm-6">
        <h3>{{ ListInfo.title }}</h3>
        <p>{{ ListInfo.text_1 }}</p>
        <p>{{ ListInfo.text_2 }}</p>
        <p>{{ ListInfo.text_3 }}</p>
      </div>
    </div>
    <div class="btn btn-primary" v-if="showMore" @click="loadMore">
      See more
    </div>
  </div>
</template>

<script>
export default {
  name: "About-comp",
  data() {
    return {
      ListInfos: [
        {
          id: 1,
          isReverse: false,
          image: require("@/assets/Image/img_about-1.svg"),
          title: "View HTTP headers and HTTP communication",
          text_1:
            "Deep packet inspection allows you to dive into HTTP communications.Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content.",
          text_2:
            "Wonder to view established HTTP sessions and users credentials? Find transferred files including office documents? Use A-Packets network traffic analysis and integrated pcap file viewer.",
          text_3:
            "Analyze pcap file to investigate HTTP data in details. View network traffic, rebuild client-server communications step by step.",
        },
        {
          id: 1,
          isReverse: true,
          image: require("@/assets/Image/img_about-2.svg"),
          title: "Find devices on network",
          text_1:
            "You can effortlessly build pcap visualisation for network communications. Explore network devices map and all communications between nodes. Classify network nodes by their type through pcap analysis. Visualize TCP/UDP communications from pcap file with network graph.",
          text_2:
            "Quick read pcap files to detect DNS, DHCP and LDAP servers and sniff captured DNS requests in pcap file. A-Packets uses passive fingerprinting to detect running network services and open ports.",
          text_3:
            "Devices map displays network traffic for popular protocols. It allows explore communication links between network nodes using various filters.",
        },
        {
          id: 1,
          isReverse: false,
          image: require("@/assets/Image/img_about-3.svg"),
          title: "Gather WiFi Information",
          text_1:
            "View wireless networks information extracted from pcap file. You can find Access Points and their SSIDs (network names). Reveal previously-associated networks for client devices using probe requests.",
          text_2:
            "You can also recognize multicast traffic to find used network protocols and services.",
          text_3:
            "Detected WPA/WPA2 handshakes in analyzed pcap file will be converted to .hccapx. This file you will use to recover password with Hashcat.",
        },
        {
          id: 1,
          isReverse: true,
          image: require("@/assets/Image/img_about-4.svg"),
          title: "Extract files from pcap",
          text_1:
            "Pcap reader allows detect and extract pictures. View office documents and other file formats found during analyzing of uploaded pcap file. You can quick preview found files in network traffic and download them.",
          text_2:
            "Comprehensive pcap file analysis is able to find most popular document formats in HTTP flow.",
          text_3: "",
        },
        {
          id: 1,
          isReverse: false,
          image: require("@/assets/Image/img_about-5.svg"),
          title: "SMB Sniffer",
          text_1:
            "SMB and NetBIOS broadcast packets provide a lot of information about LAN structure. You can extract from pcap file usefull information like OS, roles and admin comments.",
          text_2:
            "Another one interesting thing could be found in SMB communicsations is users credentials. Like NTLMv2-SSP authentication between nodes. Upload pcap file and you can try to crack found hashes with appropriate tools.",
          text_3: "",
        },
        {
          id: 1,
          isReverse: true,
          image: require("@/assets/Image/img_about-6.svg"),
          title: "DNS queries investigation",
          text_1:
            "You can explore protocols DNS, mDNS (Multicast DNS) and NBNS (NetBIOS Name Service). Gather information about network structure and activities of running services.",
          text_2:
            "Use filters to separate DNS traffic by type. Analyze queries and responses from target servers. Find Multicast/broadcast addresses (in case of mDNS and NBNS).",
          text_3: "",
        },
        {
          id: 1,
          isReverse: false,
          image: require("@/assets/Image/img_about-7.svg"),
          title: "Analyze ARP packets",
          text_1:
            "ARP (Address Resolution Protocol) messages contains valuable information about devices topology. It uses MAC addresses on Layer 2 (OSI). You can elicit device-IP accordance directly from ARP requests and responses. Investigate gratuitous ARP messages during devices boot.",
          text_2:
            "Basic automatic analyze enables to detect various anomalies in ARP communications. Detect routers and smart switches and WiFi access points integrated into LAN. It is possible to detect malicious activities like ARP spoofing nodes.",
          text_3: "",
        },
        {
          id: 1,
          isReverse: false,
          image: require("@/assets/Image/img_about-8.svg"),
          title: "Find passwords in pcap file",
          text_1:
            "A-Packets scans uploaded pcap file for various protocols to find user credentials. You can find plain text passwords in authorization headers or detect cryptographic hashes. The service is also looking for complex challenge-base auth protocols.",
          text_2: "You can extract passwords/hashes from protocols",
          text_3:
            "You can restore original passwords from obtained hashes with any hash-cracking tool.",
        },
        {
          id: 1,
          isReverse: false,
          image: require("@/assets/Image/img_about-9.svg"),
          title: "Pcap files processing API",
          text_1:
            "By using the API, you can automate the process of uploading pcap files and parse them to extract useful information. This allows you to efficiently analyze large volumes of network data without requiring manual intervention for each individual file.",
          text_2:
            "One key advantage of using the API for pcap file analysis is the ability to schedule the process. This means that you can set up a regular schedule for uploading and analyzing pcap files, ensuring that you always have up-to-date information about your network traffic. The APIs can help you streamline your network analysis process and gain insights into your network's performance and security.",
          text_3: "",
        },
        {
          id: 1,
          isReverse: false,
          image: require("@/assets/Image/img_about-10.svg"),
          title: "SSL/TLS Information",
          text_1:
            "Our tool parses pcap files to extract SSL/TLS session information, which can be used to detect attacks, identify self-signed and expired certificates, and perform other security-related analyses.",
          text_2:
            "You can view detailed information about each session, including the source and destination IP addresses, the protocol version, the cipher suite used, and any certificate information. Additionally, our tool can identify anomalies in SSL/TLS traffic, such as unexpected cipher suites or expired certificates, helping you to detect potential attacks or configuration issues.",
          text_3:
            "Overall, our SSL/TLS diagnostic tool is an essential tool for anyone involved in network security. Whether you are a network administrator, security analyst, or researcher, our tool can provide valuable insights into SSL/TLS traffic that can help you identify and mitigate potential threats.",
        },
      ],
      startIndex: 0,
      endIndex: 2,
      showMore: true,
    };
  },
  methods: {
    loadMore() {
      this.endIndex += 2; // Tăng giá trị của endIndex lên 2
      if (this.endIndex >= this.ListInfos.length) {
        this.showMore = false; // Nếu đã hiển thị hết tất cả các phần tử, ẩn nút "Xem thêm"
      }
    },
  },
};
</script>

<style scoped>
.about {
  display: flex;
  justify-content: center;
}
.about-icon {
  display: flex;
}

.about-icon img {
  width: 216px;
}
h3 {
  color: #534f4f;
  font-size: 1.3rem;
  margin: 1.3rem 0;
}
p {
  color: #6f6f6f;
  margin: 1.1rem 0;
  font-size: 1.1rem;
}
.box-shadow1 {
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}
</style>
