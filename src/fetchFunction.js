import axios from "axios";

export default async function fetchFunction() {
  const api_link =
    "https://api-v2.soundcloud.com/playlists/334671843?client_id=yBT1d8kK7at5QuM6ik9RFcvPvDTi4xyP";

  const res = await axios(api_link);

  console.log(res);

  /*
    {
      episode: "01",
      name: "Test 01",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
      episode: "02",
      name: "Test 02",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    },
    {
      episode: "03",
      name: "Test 03",
      description:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness."
    }
  ];

  return podcast; */
}
