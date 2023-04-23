<template>
  <div class="container">
    <div
      class="text-center m-2"
      style="color: #888; font-size: 1.1rem; font-weight: 100"
    >
      <h5>Frequently Asked Questions</h5>
      <p>
        Got a question? We've got answers. If you have some other questions,
        contact us.
      </p>
      <hr />
    </div>
    <div class="row">
      <div class="col-sm-4">
        <h3>Is it free?</h3>
        <p>
          Yes, it is free. You can upload, download and analyze pcap files (and
          pcapng) for free. It does not need any personalization or any charge.
          Please note that free usage is limited by 25Mb for .pcap files.
        </p>
      </div>
      <div class="col-sm-4">
        <h3>What information am I sharing when I upload a pcap file ?</h3>
        <p>
          Everything stored within the pcap file, including the file itself.
          Please be sure to read the privacy policy before submitting your the
          first file.
        </p>
      </div>
      <div class="col-sm-4">
        <h3>Which files I can upload to the service for further analyze ?</h3>
        <p>
          Now the supported file formats are restricted by only pcap and pcapng
          files. Please see instructions on
          <a href="">upload pcaps</a>
          page how to read pcap files
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FaqContent-comp",
};
</script>

<style>
h5,
h3 {
  font-size: 20px;
  font-weight: bold;
  color: #534f4f;
}
p {
  color: #6f6f6f;
}
</style>
