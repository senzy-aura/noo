import React, { useState } from 'react';
import './histories.css';
import HistoryCard from './HistoryCard';

const Histories = () => {
  const [search, setSearch] = useState('');

  const items = [
 {
  id: 1,
  name: 'RUOK',
  image: 'https://i.pinimg.com/736x/a8/36/7b/a8367b8e7b6b4c20f0225fb9adb39bce.jpg',
  initialText: `~~RUOK FF~~ is a popular Free Fire player. In 2020, ~~RUOK~~ was very dangerous that people called him ~~Hacker~~`,
  extraText: `He has a strong presence on YouTube Having 10 million subscribers on ~~Youtube~~`,
  keywords: ['ruokff', 'ruok', 'ru ok', 'ruok ff'],
  channelId: 'UC9FL0_4gUAQJLVmlExjx1Xw',  // <-- COMMA here!
    // no comma if this is last property
},


    {
      id: 2,
      name: 'Born2Kill',
      image: 'https://yt3.googleusercontent.com/ytc/AIdro_nGDqH35KL-cGxhYzfueGrQU4DCEkKBmDA5PLCgGimr1nw=s160-c-k-c0x00ffffff-no-rj',
      initialText: `~~Born2Kill~~, often stylized as ~~B2K~~, is a popular gaming content creator on platforms like YouTube and Kick.`,
      extraText: `They are known for their Battle Royale gameplay, particularly in games like Free Fire. The channel is run by two brothers, ~~Moez~~ and ~~Walid~~, who are also professional players and streamers.`,
      keywords: ['born2kill', 'b2k', 'free fire b2k', 'sniper god', 'b2k free fire'],
      channelId: 'UCNpNPMjP5S3qvXnUS0KRepw',
      
    },
    {
      id: 3,
      name: 'SANICHAR GAMING',
      image: 'https://yt3.googleusercontent.com/ytc/AIdro_nO2nhgKusvM_PivBP6K5f3nO6Q651JMrWcCOBowo9P6Q=s160-c-k-c0x00ffffff-no-rj',
      initialText: `~~Sanichar~~ is a Free Fire content creator known for his gameplay videos and funny content on YouTube.`,
      extraText: `He is an Indian gamer who posts gameplay videos, often featuring intense Free Fire matches, and also shares funny moments from his gaming sessions. His YouTube channel is called ~~SANICHAR GAMING~~.`,
      keywords: ['sanichar', 'sanichar gaming', 'ff sanichar'],
      channelId: 'UCQTDyj7vY3BK77S3rEn6G0Q',
      
    },
    {
  id: 4,
  name: 'WHITE444',
  image: 'https://yt3.googleusercontent.com/ytc/AIdro_lvhMQpKMxStUHCQ-Ze2JI6--5E29xj9vL63paFhXGx1vE=s160-c-k-c0x00ffffff-no-rj',
  initialText: `~~White 444~~ is a popular Free Fire content creator known for his gameplay and is from ~~Morocco~~.`,
  extraText: `He is recognized for his skills in Custom Room matches and has a large following on platforms like YouTube and Instagram. He is also known for his interactions with other prominent Free Fire players and teams.`,
  keywords: ['white444', 'white 444', 'free fire white444', 'white yt', 'whiteff'],
  channelId: 'UCSmcRD5MOn_qo9171KKWVgQ',
 
},
{
  id: 5,
  name: 'Rai Star',
  image: 'https://yt3.googleusercontent.com/TIqK0IVCK6JL10ACJmJhUyjcnDQU1J8mHoq2vRnI-ap0JkONg8J8IkSXD3HeFge628eyPyDXJ2k=s160-c-k-c0x00ffffff-no-rj',
  initialText: `~~Rai Star~~ is a popular Garena Free Fire player known for his exceptional gameplay and large following on YouTube.`,
  extraText: `~~Rai Star~~ is widely recognized as one of the fastest and most skilled Free Fire players, particularly known for his incredible movement speed and aggressive playstyle, according to some online sources. Some players and fans even consider him a ~~hacker~~ due to his high speed and quick gameplay.`,
  keywords: ['rai star', 'raistar', 'raistar ff', 'rai star handcam', 'ff rai'],
  channelId: 'UCa5bEOuQIbztuPnIsKbOYXQ',
 
},
{
  id: 6,
  name: 'BNL',
  image: 'https://yt3.googleusercontent.com/GzYy2aO1h6tFSBtUEEHfPyCNUQ3qUKNGrtWw15_iaqiBYcq6O5zsohJAgmH6Al0P5xRfyZbAlQ=s160-c-k-c0x00ffffff-no-rj',
  initialText: `~~BNL~~ is a popular Free Fire streamer known for his gameplay, reactions, and interviews.`,
  extraText: `He is a prominent figure in the Free Fire community, particularly within the Mina server. ~~BNL's~~ content often includes gameplay highlights, account reviews, and interactions with other Free Fire players.`,
  keywords: ['bnl', 'bnl free fire', 'bnl gameplay', 'free fire bnl', 'bnl ff'],
  channelId: 'UCDQ4lCnaCHwmzzhpFGL1oFg',

},
{
  id: 7,
  name: 'Vincenzo',
  image: 'https://yt3.googleusercontent.com/Bkh-vCxTY_YTaImgbO1pVCpki83a1cl_3Z5N5xeKk5__6VyBi00ZCOXyk6z_RORWXPMRZUTNNrs=s160-c-k-c0x00ffffff-no-rj',
  initialText: `~~Vincenzo~~ is a popular ~~Free Fire~~ player known for his skills in various categories like shotgun, sniper, and mid-long range combat.`,
  extraText: `He's often mentioned alongside other top players like ~~B2K~~. In the Free Fire community, ~~Vincenzo~~ is considered one of the best, holding high ranks in multiple categories. He also has a strong presence on social media, particularly Instagram, where he shares gaming content and interacts with fans.`,
  keywords: ['vincenzo', 'bnl free fire', 'bnl gameplay', 'free fire bnl', 'bnl ff'],
  channelId: 'UC_coy_NX4AP5hu1FaHYQaDw',

},  
{
  id: 8,
  name: 'MR ABU',
  image: 'https://yt3.googleusercontent.com/ytc/AIdro_nwSpv9t3_I-iuIpFBCo_UENlOXKmTiAcjGs9HW4W9D6_M=s160-c-k-c0x00ffffff-no-rj',
  initialText: `~~MR ABU~~ is a Pakistani professional ~~Free Fire~~ player and content creator known for uploading one-tap headshot highlights, gameplay videos, and rank highlights.`,
  extraText: `He also does live streams on his YouTube channel. He is dedicated to providing high-quality Free Fire content. ~~MR ABU~~ showcases his skills with impressive "one tap headshots" and skillful gameplay moments. He provides complete game sessions, allowing viewers to see his strategies and decision-making in action. He shares his progress and achievements in Free Fire rankings. ~~MR ABU~~ occasionally hosts live streams, interacting with his audience in real-time.`,
  keywords: ['mr abu', 'abu', 'mr', 'abubakar', 'mr abu free fire', 'mr abu ff', 'abu ff'],
  channelId: 'UCXZECbK7Vn0EyLXFRwBr93Q',

},
{
  id: 9,
  name: 'Tonde Gamer',
  image: 'https://yt3.googleusercontent.com/ytc/AIdro_mfQNrbWa80YHctl7LCeaZ7y386pEDh_bKIAH4tKdsP8fY=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~Tonde Gamer~~, whose real name is ~~Sarju Giri~~, is a popular Nepali ~~Free Fire~~ gamer and YouTuber known for his gameplay commentary in Hindi.`,
  extraText: `He is recognized for his solo, duo, and squad matches, often playing against other popular YouTubers and subscribers. He is also known for his "noob prank" gameplays and is pushing for the top Grandmaster rank in Free Fire.`,
  keywords: ['tonde gamer', 'tonde', 'tonde dai', 'dai', 'gamer', 'tonde gamers', 'sarju giri'],
  channelId: 'UCD5EC8IWhOFalXtePCkhJTA',

},
{
  id: 10,
  name: 'Gyan Gaming',
  image: 'https://yt3.ggpht.com/6CxmQBUXtU15YO_bFxay6s1SU5uBkOqvQx42oUn4R_OunwtuqDVXkasex5XektSG7U0rxaomEw=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~Gyan Gaming~~, also known as ~~Gyan Sujan~~, is a popular Indian gaming YouTuber. His channel focuses on playing various games, including ~~Free Fire~~, Fortnite, Minecraft, and GTA V, with Hindi commentary.`,
  extraText: `He has a large following, with over 17 million subscribers on YouTube. ~~Gyan Gaming~~ is known for his engaging content, including gameplay videos, live streams, and interactions with the gaming community.`,
  keywords: ['gyan', 'gyan gamer', 'gyan bhai', 'gyan yt', 'gyan sujan', 'sujan', 'gamer'],
  channelId: 'UChXi_PlJkRMPYFQBOJ3MpxA',

},
{
  id: 11,
  name: 'Zabi FF',
  image: 'https://yt3.ggpht.com/yizUMny3Vn9MBs1PeFIeqLjbLlhpbtRd9nuxDlQJ06sbCAiQDFvto5LGHJQ_ix2LXrUGnPHYcQ=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~ZABI FF~~ is a popular ~~Free Fire~~ content creator on YouTube with 585K subscribers and 752 videos.`,
  extraText: `He is known for his gameplay videos, particularly "Solo Vs Squad Full Gameplay" using weapons like the WOODPECKER and MP40, often achieving a high headshot rate. His channel also features highlights with other weapons such as AWM and M1887. He also has a presence on Instagram, with a link to his account in his YouTube channel description. Additionally, there are reports of fake ~~ZABI FF~~ accounts on TikTok, so it's important to be aware of potential impersonators.`,
  keywords: ['zabi', 'zabi ff', 'zabi free fire', 'pakistan', 'free fire pakistan', 'zabiff', 'zabii'],
  channelId: 'UC9-1NcVkzoGEs1jIaipnsvA',

},
{
  id: 12,
  name: 'Zindabad Plays',
  image: 'https://yt3.ggpht.com/NWINK9ecGPn7b6x70fEvfjRDks-vwxVK5nThXiFlDBaPjjGcxYobZq72INHDtXkYnuVomThy=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~Zindabad Plays~~ is a popular ~~Free Fire~~ content creator on YouTube known for his engaging and entertaining videos, including live streams and gameplay, often featuring unique content and challenges.`,
  extraText: `He has a large following and is recognized for his ability to keep audiences hooked. ~~Zindabad Plays~~ primarily creates content around the mobile game Free Fire, including gameplay, live streams, and vlogs.
  He interacts with his audience through live streams, challenges, and by playing with subscribers.
  ~~Zindabad Plays~~ has a significant subscriber base on YouTube and a strong presence on other platforms like ~~TikTok~~.`,
  keywords: ['zindabad', 'plays', 'zindabad plays', 'zindapad plays', 'zindapad', 'zindabad ff', 'pakistan'],
  channelId: 'UCHbJBLZzRKF9PPlPNQte74A',

},
{
  id: 13,
  name: 'Classy',
  image: 'https://yt3.ggpht.com/g1zKiZ1BIvLu8KfM1Gu6pw3FW1LpH6-Z5p92xIHXxFAmgGcDp4ZlJw2pMe_lOZx0VOKn-xuCfw=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~Classy Free Fire~~ is a popular ~~Free Fire~~ content creator known for his gameplay and ~~"classy"~~ style.`,
  extraText: `He's often associated with high-skill gameplay, including headshots and impressive movement, and has been the subject of discussion regarding whether his skills are achieved through legitimate means or if he uses ~~hacks~~. He has a large following on YouTube and is known for providing tips and tricks for the game, including headshot and ~~M500~~ techniques.`,
  keywords: ['classy', 'classy ff', 'classy free fire', 'free fire', 'india', 'free fire india', 'indian'],
  channelId: 'UCj-3YNJEMmHLNlQZX5KTn4g',

},
{
  id: 14,
  name: 'Smooth And Sneaky',
  image: 'https://yt3.googleusercontent.com/ytc/AIdro_kYLAearTfTUA-5_G7gWpIIrJKtr8zH9PTYv8XB1x8LryA=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~Smooth 444~~ is a popular player known for their high-level ~~Free Fire~~ gameplay and is associated with the ~~"Nonstop Gaming"~~ YouTube channel.`,
  extraText: `They are known for their impressive skills, particularly their handcam movement and headshot accuracy, often playing against top-ranked players and even ~~hackers~~. ~~Smooth 444's~~ real name or face is not widely known, adding to their mystique.`,
  keywords: ['smooth', 'smooth 444', 'smooth444', 'smooth and', 'smooth and sneaky', 'nonstop gaming', 'ng smooth'],
  channelId: 'UCO5xC5W6dWOucIjy3bTYCzQ',

},
{
  id: 15,
  name: 'Zerox FF',
  image: 'https://yt3.ggpht.com/JqpHqVTRK9WxKX-_fEEU9HINnE825IH6PYQ3zTVTbOk3d_CZrdanaZ6o5uAU-o2V9A7RNiOK_A=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~Zerox FF~~ is a popular ~~Free Fire~~ content creator on YouTube with a large following. He is known for his ~~"freestyle skills"~~ and wears a distinctive red mask.`,
  extraText: `His channel features a variety of ~~Free Fire~~ content, including gameplay and challenges. He Loves To Play With ~~Woodpecker~~. He Was Very Dangerous In Mobile, and Recently He Has Switches to PC and he is playing more dangerous  `,
  keywords: ['zerox', 'zerox ff', 'ng zerox', 'zeroxy', 'zerox free fire', 'nepal', 'free fire nepal'],
  channelId: 'UCk-EsqBq32A1pNpvz48vmqA',

},
{
  id: 16,
  name: 'Rufe Bhai FF',
  image: 'https://yt3.ggpht.com/eBHtpDYfm8UhITDjB4WJpuHyek5IsZa35kfZam1cGw-c0eHz4GiQqO7uCIPXmLz522HfOaYNdQ=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~Rufe FF~~, also known as ~~Rauf Khalid~~, is a Pakistani ~~Free Fire~~ content creator known for his engaging gameplay and commentary.`,
  extraText: `He is a professional gamer who creates videos focused on Free Fire, including gameplay, vlogs, and other related content. He also shares his story as a content creator, including how he recovered his channel after it was ~~hacked~~.`,
  keywords: ['rufe ff', 'rauf khalid', 'rufe bhai ff', 'rufe free fire', 'pakistan', 'free fire pakistan', 'rufe'],
  channelId: 'UC2Gb3eTQjwtNigtvBQVSN0w',

},
{
  id: 17,
  name: 'Total Gaming',
  image: 'https://yt3.googleusercontent.com/ytc/AIdro_l7o9hDEiDVLvAW00YMnnYKzf4UpyJWhREfNWD3V33mBhM=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~Total Gaming~~, also known as ~~AjjuBhai~~, is a popular Indian gaming YouTuber, primarily known for his ~~Free Fire gameplay~~ and content.`,
  extraText: `He is one of the biggest gaming channels in India, with a massive subscriber base on YouTube. His channel features gameplay, challenges, and other gaming-related content.`,
  keywords: ['ajju', 'ajay', 'ajjubhai', 'total', 'total gaming', 'india', 'ajendra variya'],
  channelId: 'UC5c9VlYTSvBSCaoMu_GI6gQ',

},
{
  id: 18,
  name: 'UnGraduate Gamer',
  image: 'https://yt3.googleusercontent.com/ytc/AIdro_mMhlv_ju_na5s0Nqztwypj6fQpae9GkcdpL2jBsVNv6OA=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~UnGraduate Gamer~~, also known as ~~UG Ayush~~, is a popular Indian YouTube gaming channel created by ~~Ayush~~.`,
  extraText: `The channel focuses on gameplay, particularly of Garena Free Fire, GTA 5, and CS:GO, often including vlogs, pranks, challenges, and edits with Hindi commentary. Ayush, the creator, aims to entertain viewers with creative editing and engaging content.`,
  keywords: ['ug', 'ug ayush', 'ungraduate gamer', 'india', 'free fire india', 'indian', 'garena free fire'],
  channelId: 'UCgsWayzDGwj9CclwicO_R3w',

},
{
  id: 19,
  name: 'Desi Gamers',
  image: 'https://yt3.googleusercontent.com/ytc/AIdro_kYmuwctsp023yP8gaxfp-68u4Ix4G5N_T5YjN_H-QCnL0=s176-c-k-c0x00ffffff-no-rj-mo',
  initialText: `~~Desi Gamers~~ is a popular YouTube channel with 17.1 million subscribers focused on gaming content. His Real Name Is ~~"Amit Sharma"~~`,
  extraText: `The channel features videos, including shorts and live streams, with a focus on "1 KILL = __ RS" videos where the streamer wins money for each kill. The channel also has an Instagram account under the handle ~~@DesiGamers_~~.`,
  keywords: ['desi gamers', 'desi gamer', 'amitbhai', 'amit bhai', 'amit sharma', 'india', 'indian'],
  channelId: 'UCuApqv2tNQ73S7gcfrfCSDw',

},
{
  id: 20,
  name: 'Axel FreeFire',
  image: 'https://yt3.googleusercontent.com/tTeWnx2MKjG3Vblf5OQdyz2VTBBN9Fowr3ZVHBpuuo8OdCPwDILkbcboZL9GqCvRm8T0FRV_nw=s160-c-k-c0x00ffffff-no-rj',
  initialText: `~~Axel Free Fire~~ (also known as ~~AxelFF~~) is a ~~Free Fire~~ content creator known for his gameplay highlights, montages, and tips & tricks videos.`,
  extraText: `He has a YouTube channel with a large subscriber base where he uploads videos related to the game, including gameplay, settings, and other related content. He also has an Instagram account where he shares updates and interacts with his followers.`,
  keywords: ['axel ff', 'axel free fire', 'axel gaming', 'axel gamers', 'axel gamer', 'india', 'indian'],
  channelId: 'UCW1dBTJ0OadYx6i6Y8G6vKA',

},
{
  id: 21,
  name: 'Rage 99',
  image: 'https://yt3.googleusercontent.com/hrSbfu9A2ZWOBdeGP6GSH-L7qbRCFrMPvHWSSNeQ12SUSWg9xRkUSER1fQNSkTAxC9ILe7ugcQ=s160-c-k-c0x00ffffff-no-rj',
  initialText: `~~RAGE 99~~ is a Free Fire content creator known for his gameplay videos and live streams, particularly his 
  4vs4 Tournament Gameplay.`,
  extraText: `RAGE 99 have one of the biggest and dangerous guild of Pakistan. Every player in the guild have 70% headshot and they often play tournaments against different countries also they have played against NXT, NG and more dangerous and well known guild and defeated them.
   ~~Rage 99~~ is considered as ~~No. 1 PC Player of Pakistan~~`,
  keywords: ['rage 99', 'ragee', 'rage ff', 'pk', 'rage 999', 'ubaid', 'ubaidxrage'],
  channelId: 'UC51AxtKqkgEff57YdV7p6rQ'
},
{
  id: 22,
  name: 'OP INSANE',
  image: 'https://yt3.googleusercontent.com/kVN5hJ8uCIoUTDespLBNfGju6VSJih4O4gV0_D0yz-8_Z7UNuUdOoU0L1kT-j6kYXvofwuNd=s160-c-k-c0x00ffffff-no-rj',
  initialText: `~~OP INSANE's~~ videos feature a mix of intense in-game action, strategic gameplay, and humorous commentary. He often collaborates with other gamers and participates in challenges, showcasing his skills and entertaining his audience. The channel's content is primarily in Urdu, catering to the ~~Pakistani gaming community~~.`,
  extraText: `While ~~OP INSANE's~~ primary platform is ~~YouTube~~, he maintains an active presence on various social media platforms to engage with his audience and share updates.`,
  keywords: ['op insane', 'insane', 'insane ff', 'insane free fire', 'op insane ff', 'insane yt', 'pakistan'],
  channelId: 'UCR38cbwjR0q8vnc0TI6GCUQ'
},
 {
   id: 23,
   name: 'Semox FF',
   image: 'https://yt3.googleusercontent.com/x4EmvgRD1FQuywTj2yfx48m15OhaQVZSfrF876dcH6GT_5yFkA5yoCp5B5bGluGA-eGWwDzZ=s160-c-k-c0x00ffffff-no-rj',
   initialText: `Semox An Esports Player`,
   extraText: `Semox is from India and plays esport from the team named as Zero Mercy`,
   keywords: ['', '', '', '', '', '', ''],
 },
// {
//   id: 20,
//   name: '',
//   image: '',
//   initialText: ``,
//   extraText: ``,
//   keywords: ['', '', '', '', '', '', ''],
// },
// {
//   id: 20,
//   name: '',
//   image: '',
//   initialText: ``,
//   extraText: ``,
//   keywords: ['', '', '', '', '', '', ''],
// },
// {
//   id: 20,
//   name: '',
//   image: '',
//   initialText: ``,
//   extraText: ``,
//   keywords: ['', '', '', '', '', '', ''],
// },
// {
//   id: 20,
//   name: '',
//   image: '',
//   initialText: ``,
//   extraText: ``,
//   keywords: ['', '', '', '', '', '', ''],
// },

// {
//   id: 20,
//   name: '',
//   image: '',
//   initialText: ``,
//   extraText: ``,
//   keywords: ['', '', '', '', '', '', ''],
// },
// {
//   id: 20,
//   name: '',
//   image: '',
//   initialText: ``,
//   extraText: ``,
//   keywords: ['', '', '', '', '', '', ''],
// },
// {
//   id: 20,
//   name: '',
//   image: '',
//   initialText: ``,
//   extraText: ``,
//   keywords: ['', '', '', '', '', '', ''],
// },
// {
//   id: 20,
//   name: '',
//   image: '',
//   initialText: ``,
//   extraText: ``,
//   keywords: ['', '', '', '', '', '', ''],
// },
// {
//   id: 20,
//   name: '',
//   image: '',
//   initialText: ``,
//   extraText: ``,
//   keywords: ['', '', '', '', '', '', ''],
// },

  ];

  const filteredItems = items.filter((item) =>
    item.keywords.some((keyword) =>
      keyword.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="history-column-container">
      <input
        type="text"
        className="search-box"
        placeholder="Search By Name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredItems.length > 0 ? (
        filteredItems.map((item) => (
          <HistoryCard key={item.id} data={item} />
        ))
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default Histories;
