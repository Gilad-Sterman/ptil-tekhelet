import { useEffect } from "react";
import { SideBarEng } from "../cmps/SideBarEng";
import { ScrollDown } from "../cmps/ScrollDown";
import { ScrollDownMain } from "../cmps/ScrollDownMain";

export function English() {

    useEffect(() => {
        const intervalId = setInterval(autoScroll, 20000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    function autoScroll() {
        let elementId = null
        const card0 = document.getElementById('card0')
        const card1 = document.getElementById('card1')
        const card2 = document.getElementById('card2')
        const card3 = document.getElementById('card3')
        const card4 = document.getElementById('card4')
        const card5 = document.getElementById('card5')
        const card6 = document.getElementById('card6')
        const card7 = document.getElementById('card7')
        const card8 = document.getElementById('card8')
        const card9 = document.getElementById('card9')
        const card10 = document.getElementById('card10')
        const card11 = document.getElementById('card11')
        const card12 = document.getElementById('card12')
        const card13 = document.getElementById('card13')
        const card14 = document.getElementById('card14')
        const card15 = document.getElementById('card15')
        const card16 = document.getElementById('card16')
        const card17 = document.getElementById('card17')
        const card18 = document.getElementById('card18')


        if (window.scrollY < card1.offsetTop - 100) {
            elementId = null
            // } else if (window.scrollY < card1.offsetTop - 100) {
            //     elementId = 0
        } else if (window.scrollY < card2.offsetTop - 100) {
            elementId = 1
        } else if (window.scrollY < card3.offsetTop - 100) {
            elementId = 2
        } else if (window.scrollY < card4.offsetTop - 100) {
            elementId = 3
        } else if (window.scrollY < card5.offsetTop - 100) {
            elementId = 4
        } else if (window.scrollY < card6.offsetTop - 100) {
            elementId = 5
        } else if (window.scrollY < card7.offsetTop - 100) {
            elementId = 6
        } else if (window.scrollY < card8.offsetTop - 100) {
            elementId = 7
        } else if (window.scrollY < card9.offsetTop - 100) {
            elementId = 8
        } else if (window.scrollY < card10.offsetTop - 100) {
            elementId = 9
        } else if (window.scrollY < card11.offsetTop - 100) {
            elementId = 10
        } else if (window.scrollY < card12.offsetTop - 100) {
            elementId = 11
        } else if (window.scrollY < card13.offsetTop - 100) {
            elementId = 12
        } else if (window.scrollY < card14.offsetTop - 100) {
            elementId = 13
        } else if (window.scrollY < card15.offsetTop - 100) {
            elementId = 14
        } else if (window.scrollY < card16.offsetTop - 100) {
            elementId = 15
        } else if (window.scrollY < card17.offsetTop - 100) {
            elementId = 16
        } else if (window.scrollY < card18.offsetTop - 100) {
            elementId = 17
        }
        else {
            elementId = 18
        }
        if (!elementId && elementId !== 0) elementId = 1
        else elementId += 1
        const el = document.getElementById(`card${elementId}`)
        if (elementId > 18) {
            window.scrollTo(0, 0)
            elementId = null
            return
        }
        window.scrollTo(0, el.offsetTop - 50)

    }

    return (
        <>
            <div className='landing eng'>
                <img src="https://res.cloudinary.com/dollaguij/image/upload/v1700480190/landing1_u0pdxj.png" alt="" />
                <h1>The Tekhelet in the time of the
                    <br />
                    Mishna and Gmara
                </h1>
            </div>
            <div className="top-card eng" id="card0">
                <h2>The background for the period
                </h2>
                <p className="eng">The Tekhelet was a part of life for the people of Israel even during the Mishna and Talmud period, and our late sages expand on the description of the snail that was the source of the Tekhelet, the ways to catch it, the ways of producing the Tekhelet, the method of dyeing with Tekhelet, the rules for tying the Tzitzit with Tekhelet and white strings, how to distinguish between an original Tekhelet color and a fake color that originates from The plant, etc. Findings and texts from the period teach more about the Tekhelet in the Jewish world, and also on the fate of Tekhelet in the days after the destruction of the Temple and the exile of the Jewish people.</p>
            </div>
            {/* <ScrollDown /> */}
            <main className='main-layout eng'>
                <SideBarEng />
                <div className='card-container eng'>
                    <div className="card" id='card1'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%A8%D7%99%D7%92-%D7%9E%D7%A6%D7%93%D7%94-1.webp" alt="" />
                            <div className="side-title eng">
                                The Masada fabric
                            </div>
                        </div>
                        <p className='eng'>This fabric is an archaeological find from Masada, dating back 2,000 years.

                            The fabric appears to be part of a robe or dress worn by a member of the Herodian royal family.
                            Chemical analysis shows that the dye came from a Murex Trunculus snail.
                        </p>
                        <ScrollDownMain link={'#card2'} />
                    </div>
                    <div className="card" id='card2'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/2-%D7%A0%D7%99%D7%A8%D7%95%D7%9F-%D7%A7%D7%99%D7%A1%D7%A8-AI-1024x631.webp" alt="" />
                            <div className='side-title eng'>
                                Nero Caesar
                            </div>
                        </div>
                        <p className='eng'>Emperor Nero was obsessed with the color from the snail!

                            He banned the sale of the coveted color and even carried out a "sting" operation.

                            When he sent agents to try and buy dye, and when they succeeded - he shut down the market.
                            When he saw a matron wearing a purple dress, he got so angry that he orderded his guards to strip her - of her clothes and all her possessions!
                        </p>
                        <ScrollDownMain link={'#card3'} />
                    </div>
                    <div className="card" id='card3'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%97%D7%95%D7%A8%D7%91%D7%9F-%D7%91%D7%99%D7%AA-%D7%A9%D7%A0%D7%99-AI-1024x633.webp" alt="" />
                            <div className='side-title eng'>
                                The destruction of the second Temple
                            </div>
                        </div>
                        <p className='eng'>
                            In the year 70 the crown fell off our head and our temple was destroyed by the Romans.

                            The temple - with its veils, wall coverings and tools, and the clothes of the priests who served in the service of God - was the biggest 'customer' of the Tekhelet market.

                            Due to the destruction, the Tekhelet industry entered a deep crisis that affected the snail hunters, the dyers and the entire supply chain.

                            Despite the crisis, Jews continued to adhere to the Mitzvah of putting the Tekhelet string in their tassels.

                        </p>
                        <ScrollDownMain link={'#card4'} />
                    </div>
                    <div className="card" id='card4'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/AI-%D7%9E%D7%A8%D7%93-%D7%94%D7%AA%D7%A4%D7%95%D7%A6%D7%95%D7%AA-1024x683.webp" alt="" />
                            <div className='side-title eng'>
                                The Diaspora Rebellion
                            </div>
                        </div>
                        <p className='eng'>
                            After the destruction, Jews continued to rebel against Roman rule.

                            The riots spread to Jewish communities all over the Mediterranean.

                            In the events that the Sages call the <span className='bold'> "Kitos polemic" –</span>

                            The Roman general Lucius Quietus was sent to suppress the rebellion and did so with a harsh and merciless hand.

                            He outlawed every aspect of Jewish national identity and pride, including the wearing of Tekhelet.

                        </p>
                        <ScrollDownMain link={'#card5'} />
                    </div>
                    <div className="card" id='card5'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%A8-%D7%99%D7%95%D7%A1%D7%99-%D7%94%D7%92%D7%9C%D7%99%D7%9C%D7%99-%D7%A7%D7%A6%D7%95%D7%95%D7%AA-%D7%9B%D7%94%D7%94%D7%99%D7%9D.webp" alt="" />
                            <div className='side-title eng'>
                                Rabbi Yossi Galili
                            </div>
                        </div>
                        <p className='eng'>
                            During the harsh years of fighting the Romans, the lives of the Jews of the Land of Israel were difficult, oppressed and impoverished.

                            And when faced with a new spiritual reality of Judaism without a temple, the Jews found themselves in new situations that required bold halachic responses.

                            For the first time we hear the words of R. Yossi Galili, who presents the tradition he received from his teacher, R. Yochanan ben Nuri, according to which when it is not possible to obtain Tekhelet, one must continue to wear a tassel with only white threads.

                        </p>
                        <ScrollDownMain link={'#card6'} />
                    </div>
                    <div className="card" id='card6'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%A8%D7%99%D7%92-%D7%95%D7%90%D7%93%D7%99-%D7%9E%D7%A8%D7%95%D7%91%D7%A2%D7%AA.webp" alt="" />
                            <div className='side-title eng'>
                                Wadi Murabba'at fabric
                            </div>
                        </div>
                        <p className='eng'>
                            During the Bar Kochba rebellion, Jewish soldiers and their families hid in caves in the cliffs of the Judean desert.

                            The objects they left behind were discovered by archaeologists and tell their story, 2,000 years later.

                            This small piece of cloth, dyed sky blue, a color that came from a Murex Trunculus snail, proves that the technology for dyeing blue using snails existed in Israel during the Mishna period.

                        </p>
                        <ScrollDownMain link={'#card7'} />
                    </div>
                    <div className="card" id='card7'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%93%D7%A8%D7%99%D7%90%D7%A0%D7%95%D7%A1-AI-%D7%9B%D7%97%D7%95%D7%9C.webp" alt="" />
                            <div className='side-title eng'>
                                Hadrian's decrees - Shmad's generation
                            </div>
                        </div>
                        <p className='eng'>
                            After the defeat of Bar Kochba, the Jews suffered under the decrees of Hadrian who stated that keeping a Mitzvah or learning the Torah is a crime punishable by execution.

                            During this period it was very dangerous to collect snails and produce Tekhelet.

                            R. Yossi says that he met a fisherman who warned him that the snails are surrounded by poisonous monstrous creatures...

                            (This is, of course, an allusion to the Romans and their evil decrees).

                        </p>
                        <ScrollDownMain link={'#card8'} />
                    </div>
                    <div className="card" id='card8'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/AI-%D7%A8-%D7%9E%D7%90%D7%99%D7%A8.webp" alt="" />
                            <div className='side-title eng'>
                                Rabbi Meir
                            </div>
                        </div>
                        <p className='eng'>
                            "Rabbi Meir would say:

                            How is Tekhelet different from all the colors, since Tekhelet is like the sea, and the sea is like the sky, and the sky is like the throne of honor."

                        </p>
                        <ScrollDownMain link={'#card9'} />
                    </div>
                    <div className="card" id='card9'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%A0%D7%98%D7%95%D7%A0%D7%99%D7%A0%D7%95%D7%A1.webp" alt="" />
                            <div className='side-title eng'>
                                Antoninus (Caracalla)
                            </div>
                        </div>
                        <p className='eng'>
                            The emperor Marcus Aurelius Antoninus, known as Caracalla, was a true friend of the Jewish people, and a friend of Rabbi Yehuda Hanasi.

                            The Gmara tells many stories about the relationship between Rabbi and Antoninus.

                            This coin pictured was minted in Tyre, just north of Israel, showing Caracalla on one side and the eagle (symbol of Rome) on the other, guarding the most valuable product in the empire:

                            The Murex snail, from which the color for Tekhelet and Argaman was produced.
                        </p>
                        <ScrollDownMain link={'#card10'} />
                    </div>
                    <div className="card" id='card10'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%91%D7%99%D7%AA-%D7%A9%D7%A2%D7%A8%D7%99%D7%9D-%D7%A8-%D7%99%D7%94%D7%95%D7%93%D7%94-%D7%94%D7%A0%D7%A9%D7%99%D7%90-1024x633.webp" alt="" />
                            <div className='side-title eng'>
                                Rabbi Yehuda Hanasi
                            </div>
                        </div>
                        <p className='eng'>
                            Rabbi's time marked the peak of Jewish life in the Land of Israel after the destruction.

                            Rabbi himself was the ideal leader: "Torah and greatness in one place".

                            During his lifetime the Romans did not impose restrictions on the production of Tekhelet and the price was not exorbitant.

                            Rabbi felt that there was no excuse not to observe the Mitzvah of Tzitzit in the perfect way, with both white and Tekhelet threads.

                            He ruled that without Tekhelet you should not wear Tzitzit at all.

                            "They delay each other - Rabbi's words".
                        </p>
                        <ScrollDownMain link={'#card11'} />
                    </div>
                    <div className="card" id='card11'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%A4%D7%A8%D7%92%D7%9E%D7%98%D7%99%D7%94.webp" alt="" />
                            <div className='side-title eng'>
                                "Pragmatia" in the city of Tyre
                            </div>
                        </div>
                        <p className='eng'>
                            The city of Tyre was known as the center of the Murex dye industry since the days of King Solomon.

                            King Hiram of Tyre sent craftsmen to help build the temple, among them were also experts in Tekhelet.

                            During the period of the Mishna and the Talmud, Tyre was a trading center, and its most important commodity was snail-dyed fabrics.

                            This can be seen on the coin depicting the founding myth of Tyre - Hercules' dog discovering the Murex.

                            Trade knows no borders, and businessmen often traveled from Israel to Tyre, and learned firsthand about the dye industry there.

                            The Midrash even tells about Rabbi Haya and Rabbi Shimon (Rabbi's son) who went to Tyre to trade textiles.

                        </p>
                        <ScrollDownMain link={'#card12'} />
                    </div>
                    <div className="card" id='card12'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%91%D7%99%D7%99-AI-1024x631.webp" alt="" />
                            <div className='side-title eng'>
                                Abaye
                            </div>
                        </div>
                        <p className='eng'>
                            Abaye, who lived in Babylon far from the Tekhelet snails in the Mediterranean Sea, questioned Rabbi Shmuel bar Yehuda upon his arrival from Israel:

                            "Tekhelet, how do you dye it?"

                            The answer was somewhat laconic - you take snail extract, add chemicals, heat it... that in relation to dyeing.

                            But there were additional halachic considerations, Rabbi Shmuel said,

                            In other words, one must be very careful not to spoil the dye vat by doing actions that are not directly related to the dyeing Mitzvah.

                            From this we learn the importance of the proper intention at each stage of dyeing - for the sake of the Mitzvah of Tzitzit.

                        </p>
                        <ScrollDownMain link={'#card13'} />
                    </div>
                    <div className="card" id='card13'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%AA%D7%A7%D7%95%D7%A4%D7%AA-%D7%A8%D7%91%D7%90.webp" alt="" />
                            <div className='side-title eng'>
                                Rabbah
                            </div>
                        </div>
                        <p className='eng'>
                            The Gmara tells of two Jews from Israel who brought Tekhelet to Raba, a great Amorite in Babylon,

                            But they were caught on their way by an "eagle".

                            The story had a happy ending, "thanks to mercy and thanks to them they got out safely".

                            Despite the decrees of the Romans (whose symbol was an eagle) that prohibited the use of Tekhelet and Argaman,

                            Jews still risked their lives to fulfill the Mitzvah of Tzitzit in its entirety with the Tekhelet string.

                            They were also willing to smuggle Tekhelet from Israel to their brothers in Babylon despite the dangers involved.

                        </p>
                        <ScrollDownMain link={'#card14'} />
                    </div>
                    <div className="card" id='card14'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%90%D7%97%D7%90%D7%99%D7%99-AI.webp" alt="" />
                            <div className='side-title eng'>
                                Rabbi Achai
                            </div>
                        </div>
                        <p className='eng'>
                            The Talmud tells about the tests carried out by Rav Achai to determine if blue threads are authentic Tekhelet or Kala Ilan - a fake dye of plant origin.

                            This Gmara teaches us some important things:

                            • The appearance of Kala Ilan (indigo) is exactly the same as that of Tekhelet.

                            • There are only two options to paint in the Tekhelet color - with Tekhelet from the snail or with Kala Ilan, and there is no third option.

                            • And most importantly, the Tekhelet was available until the days of Rav Achai, but this is the last documentation of its use.
                        </p>
                        <ScrollDownMain link={'#card15'} />
                    </div>
                    <div className="card" id='card15'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%A1%D7%A4%D7%A8-%D7%A9%D7%9C-%D7%99%D7%95%D7%A1%D7%98%D7%90%D7%A0%D7%95%D7%A1.webp" alt="" />
                            <div className='side-title eng'>
                                Justinianus
                            </div>
                        </div>
                        <p className='eng'>
                            Things that are not allowed to be sold, and people that are not allowed to sell or buy them

                            No private citizen has the right to dye Argaman cloths or to sell them, neither silk nor wool, nor the dyes called Blatta, Oxyblatta and Hyacinthina.*

                            The seller of wool dyed in these colors knew that he was risking the loss of his property and his life.

                            <br />
                            <span className='small italic'>*These are the colors produced from sea snails - purple and blue. Hyacinthina is the Latin translation of 'Tekhelet'.</span>
                        </p>
                        <ScrollDownMain link={'#card16'} />
                    </div>
                    <div className="card" id='card16'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/1%D7%A2%D7%A8%D7%99%D7%9B%D7%AA-%D7%94%D7%91%D7%91%D7%9C%D7%99.webp" alt="" />
                            <div className='side-title eng'>
                                The Babylonian Talmud edition
                            </div>
                        </div>
                        <p className='eng'>
                            "It can be safely asserted that at the time the Talmud was signed (around 570) the Mitzvah of Tzitzit with Tekhelet was still in practice, since there is nowhere in the Talmud a slight allusion to the discontinuance of the Mitzvah"

                            This is what Rabbi Yitzhak Halevi Herzog writes in his monumental work on the subject of Tekhelet.

                            Despite the difficulty of obtaining Tekhelet, despite the exorbitant price, and in the face of the great dangers posed by the Romans,

                            Jews continued to wear Tekhelet, until it became impossible...

                        </p>
                        <ScrollDownMain link={'#card17'} />
                    </div>
                    <div className="card" id='card17'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%9E%D7%9C%D7%97%D7%9E%D7%AA-%D7%94%D7%A4%D7%A8%D7%A1%D7%99%D7%9D-%D7%95%D7%94%D7%91%D7%99%D7%96%D7%A0%D7%98%D7%99%D7%9D-AI.webp" alt="" />
                            <div className='side-title eng'>
                                The Persian and Byzantine Wars
                            </div>
                        </div>
                        <p className='eng'>
                            The seventh century saw the destruction of the Jewish settlement in the Land of Israel.

                            The Byzantines, who ruled there for centuries, were pushed out by the Persians.

                            A few years later, the country was again conquered by the Byzantines, a conquest that resulted in the death of tens of thousands of Jews.

                            Shortly thereafter, the Arab armies led by Caliph Umar defeated the Byzantines and the Persians, and took control of all the shores of the Mediterranean Sea.

                            When the dyeing houses were destroyed, the secrets of the dyeing craft and the knowledge of the identity of the snail were also lost, and the production processes were covered in the mists of history and forgotten.

                        </p>
                        <ScrollDownMain link={'#card18'} />
                    </div>
                    <div className="card last-card" id='card18'>
                        <div className='img-container'>
                            <img src="https://nostalgic-euclid.35-246-215-141.plesk.page/wp-content/uploads/2023/07/%D7%9E%D7%93%D7%A8%D7%A9-%D7%AA%D7%A0%D7%97%D7%95%D7%9E%D7%90-%D7%A7%D7%A6%D7%95%D7%95%D7%AA-%D7%9B%D7%94%D7%99%D7%9D-1024x632.webp" alt="" />
                            <div className='side-title eng'>
                                Midrash Tanhuma
                            </div>
                        </div>
                        <p className='eng'>
                            <span className='bold'>"And now we have nothing but white, for Tekhelet has been lost" </span> (Tanhuma, Parashat Shlach, 15)

                            For the first time we hear that Tekhelet has been completely lost.

                            After that, there is no trace of anyone wearing Tzitzit with Tekhelet.

                            Jews continued to wear Tzitzit with white threads, but always dreamed of the day when they could fulfill the Mitzvah of Tzitzit in its entirety.

                            <br />
                            <br />
                            <span className='bold'>"And have mercy on us and build your city quickly in our days, and bring us peace to the Holy Land.
                                And may we be privileged that the snail will return and be revealed, and we will be able to observe the Mitzvah of Tekhelet"</span> (prayer by Rabbi Nachman of Breslav)
                        </p>
                        <ScrollDownMain link={'#card1'} isLast={true}/>
                    </div>
                </div>
            </main >
        </>
    )
}