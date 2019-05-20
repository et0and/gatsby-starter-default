import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Artists from Asia - index" />
    <h1>Artists from Asia</h1>

| Name | Info | Links | Images |
|--------------|--------------------------|--------------------|--------|
| Aida, Makoto 会田 誠 | A contemporary Japanese artist known for his provocative works of manga, painting, video, photography, sculpture, and installation. Though less well-known internationally than Takashi Murakami or Yoshitomo Nara, he is recognized in Japan as one of most the important figures of Japanese contemporary art. | https://google.com | ![](https://lh4.googleusercontent.com/MEMiZPdL4wvFSwBj2gAZek8hMJXesfPLwETN2LCW5IuUGgzJybJIEitLFuE8-Xa3LYEdoMg7sd4tzd-zmPlS-lJ8ra3Pg-gUa08YuMgKsd_xmeD78pLea5xcia_CqlIV6w) |
| Araki, Nobuyoshi 荒木 経惟 | A prolific photographer who has produced thousands of photographs over the course of his career. He typically works in black-and-white photography, and his hallmark style is deliberately casual. |  | ![](https://lh6.googleusercontent.com/fOxNS3V06qoebGLTVRPZbWq21KNu6myWHMtj2MwxsPd6_S2mZyj72-mCiepX-383YhdyVq7WqQiBANXkqBFr8KTWmNylc6iYdyo_lKSSjieuuP22BVbwl41m1kdhg0dTSA) |
| Chow, Kah Bee 圈 | Chow works in a variety of different media but often with simple, everyday materials. |  | ![](https://lh4.googleusercontent.com/crnwOOIS6vDVNZMNe7gf4B2GUVHvnygLY4AfTSfT4jLGB7W14l1Y09822mJcGpYW7pii6xXpKHZ2rBkObKkf5GdiNR3_Bg3e1RCZYi81B4Nv4xkTpKtgPki3C2phFizlSA) |
| Dumb Type | An artist collective founded in 1984, Dumb Type are trained in varied disciplines, including visual arts, theatre, dance, architecture, music composition and computer programming. Their work ranges across such diverse media as art exhibitions, performances, audiovisuals and publications. |  | ![](https://lh5.googleusercontent.com/8484q-m_txr4IyDxsXPPMp7ujs59tpFqrN83i62cUnBZcao1NHCVT1AsAqS7eGvuRU6WTFLeIntapgelhThrlj-T5QZAvxb4IJ2lXAl06r9IS7DqIQp4TzlVS--bj2qsOQ) |
| Guo-Qiang, Cai 蔡国强 | Utilizing the groundbreaking mediums of gunpowder and fireworks to synthesize a new form of performance and spectacle into the art-making process, his work is renowned for its ability to leverage tension and fear toward a common consideration of the beauty in destruction. |  | ![](https://lh5.googleusercontent.com/n4wLB7ah4KDa_AGrIn_MfOdZjtIkwgHjo5TuOIEy8AhcQt0ukqoS0p3WhbawEAGar77jgCQ0o2wMLcAXHoGnV53TrzMRmCm3NnO3IwWS_gY3MXk4SO9TOp_uvAOHil9n4A) |
| Gutai Group 具体美術協会 | The first radical, post-war artistic group in Japan. It was founded in 1954 by the painter Jiro Yoshihara in response to the reactionary artistic context of the time. This influential group was involved in large-scale multimedia environments, performances, and theatrical events and emphasizes the relationship between body and matter in pursuit of originality. |  | ![](https://lh3.googleusercontent.com/b0RqNIxwqGOOgjJjP9InfwxdxNoNLwn4CNGJeJEzHHeM7lePWhviPAVVW7mTUjUKkq5jIxIVKzty501G9rxvdjxHf_BTGCt-caoW5zVCLC_tvYCKlvAck66w6v-FeM1jYw) |  
  
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
