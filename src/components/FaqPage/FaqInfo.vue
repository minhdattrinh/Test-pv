<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <h1>FAQ</h1>
        <div class="faqInfo">
          <div v-for="(list, index) in Lists" :key="index" class="faqInfo-list">
            <ul>
              <li>
                <a :href="list.id">{{ list.title }}</a>
              </li>
            </ul>
          </div>
          <hr />
          <div v-for="(list, index) in Lists" :key="index" class="faqInfo-list">
            <h2>{{ list.title }}</h2>
            <p>{{ list.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Lists: [
        {
          id: 1,
          title: "What is apackets.com?",
          text: "A-Packets is an online pcap file analyzer that allows users to explore and analyze network traffic, extract files, detect devices on a network, investigate DNS queries and ARP packets, and gather SSL/TLS information. It also has a password finding feature for various protocols and an API for automating the analysis process (see subscription plans for details).",
        },
        {
          id: 2,
          title: "What file formats does A-Packets support?",
          text: "A-Packets supports pcap and pcapng files, which are a common format for storing network traffic data captured by packet capture software.",
        },
        {
          id: 3,
          title: "Is this service free?",
          text: "Yes, it is free for common usage. You can upload, download and analyze pcap files (and pcapng) for free. It does not require any personalization or any charge. Please note that free usage is limited by 25Mb per pcap/pcapng file.",
        },
        {
          id: 4,
          title: "What information am I sharing when I upload a pcap file ?",
          text: "Everything stored within the pcap file, including the file itself. Please be sure to read the privacy policy before submitting your the first file.",
        },
        {
          id: 5,
          title: "Can I view HTTP headers and communications with A-Packets?",
          text: "Yes, A-Packets allows users to dive into HTTP communications, explore requests and responses, and collect form data.",
        },
        {
          id: 6,
          title:
            "Can A-Packets detect running network services and open ports?",
          text: "Yes, A-Packets uses passive fingerprinting to detect running network services and open ports.",
        },
        {
          id: 7,
          title: "Can I find devices on a network with A-Packets?",
          text: "Yes, A-Packets allows users to build a visualization of network communications, explore a network devices map, and classify network nodes by their type through pcap analysis.",
        },
        {
          id: 9,
          title: "Can I gather Wi-Fi information with A-Packets?",
          text: "Yes, A-Packets allows users to view wireless network information extracted from pcap files, find access points and their SSIDs, and recognize multicast traffic to find used network protocols and services.",
        },
        {
          id: 10,
          title: "Can A-Packets extract files from pcap files?",
          text: "Yes, A-Packets allows users to detect and extract pictures, view office documents and other file formats found during the analysis of uploaded pcap files.",
        },
        {
          id: 11,
          title: "Can I find passwords in a pcap file with A-Packets?",
          text: "Yes, A-Packets scans uploaded pcap files for various protocols to find user credentials, including plain text passwords in authorization headers, cryptographic hashes, and complex challenge-base auth protocols.",
        },
        {
          id: 12,
          title:
            "Does A-Packets have an API for automating the analysis process?",
          text: "Yes, A-Packets has an API for automating the process of uploading pcap files and extracting useful information from them.",
        },
        {
          id: 13,
          title: "Can A-Packets provide SSL/TLS information?",
          text: "Yes, A-Packets parses pcap files to extract SSL/TLS session information, identifies anomalies in SSL/TLS traffic, and provides detailed information about each session, including the source and destination IP addresses, the protocol version, the cipher suite used, and any certificate information.",
        },
        {
          id: 14,
          title: "How long does pcap analysis take ?",
          text: "It takes about 15-20 sec. for analyze depending on the overall service load.",
        },
        {
          id: 15,
          title: "What does A-Packets can offer compare to traditional tools ?",
          text: "Quick review of network structure and main services as a graph, client-server communications and data for HTTP, FTP, Telnet, SIP and other protocols using shareable form of reports.",
        },
        {
          id: 16,
          title: "I want to remove my file after uploading.",
          text: "You can remove it by yourself for private files or ask to remove the public file with contact form.",
        },
        {
          id: 17,
          title: "What does registration offer ?",
          text: "You can upload files privately according to Pricing Plan and remove it by yourself. Private files are invisible to others.",
        },
      ],
    };
  },
};
</script>

<style scoped>
.faqInfo {
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.faqInfo-list {
  margin: 10px;
}
h1 {
  color: black;
  margin: 25px;
  text-align: center;
  border-bottom: 1px solid black;
}
h2 {
  color: #333;
  margin-top: 25px;
  font-size: 1.1rem;
  font-weight: bold;
}
p {
  color: #333;
  margin-bottom: 16px;
}
a {
  color: #333;
}
</style>
