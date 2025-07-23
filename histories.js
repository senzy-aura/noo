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
    keywords: ['white444', 'white 444', 'white 444 yt', 'white yt', 'whiteff'],
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
    keywords: ['vincenzo', 'vincenzo ff', 'vincenzo free fire', 'vicenzo', 'vicenzo ff'],
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
    initialText: `RAGE 99 is a talented esports player from Pakistan known for his exceptional skills in Free Fire. He is widely recognized for his fast-paced and aggressive gameplay on PC.`,
    extraText: `RAGE 99 has gained popularity for his precise headshots and dominating performances in 4v4 matches. He often competes against top players from different countries, showcasing his abilities on an international level. His gameplay videos attract a large audience on YouTube.
    Many fans consider him the fastest and most dangerous Free Fire PC player in Pakistan. He is also praised for his sharp reflexes and mechanical control. RAGE 99 represents the competitive edge of Pakistan’s esports scene. His content mostly features intense battles and professional-level strategies. He continues to grow in fame as one of the top Free Fire players in the region.`,
    keywords: ['rage 99', 'ragee', 'rage ff', 'pk', 'rage 999', 'ubaid', 'ubaidxrage'],
    channelId: 'UC51AxtKqkgEff57YdV7p6rQ'
  },
  {
    id: 22,
    name: 'OP INSANE',
    image: 'https://yt3.googleusercontent.com/kVN5hJ8uCIoUTDespLBNfGju6VSJih4O4gV0_D0yz-8_Z7UNuUdOoU0L1kT-j6kYXvofwuNd=s160-c-k-c0x00ffffff-no-rj',
    initialText: `OP INSANE is a well-known Free Fire player from Pakistan, famous for his exceptional one-tap headshot skills. He has built a strong reputation in the Pakistani gaming community through his intense and aggressive gameplay.`,
    extraText: `OP INSANE frequently uploads ranked matches, custom room battles, and 1v1 challenges on his YouTube channel. His sharp aim and fast reflexes make his gameplay entertaining and inspiring for his viewers. He often collaborates with other top Pakistani players, engaging in high-level matches that attract a large audience. His content is highly appreciated for showcasing close combat fights and perfect mechanical control.
    OP INSANE's popularity continues to grow as he consistently proves his skill in competitive matches. His videos highlight his fearless playstyle and strategic approaches in difficult situations. Fans admire his consistency in delivering headshot montages and professional gameplay. OP INSANE remains one of the standout Free Fire players in Pakistan's esports scene.`,
    keywords: ['op insane', 'insane', 'insane ff', 'insane free fire', 'op insane ff', 'insane yt', 'pakistan'],
    channelId: 'UCR38cbwjR0q8vnc0TI6GCUQ'
  },
  {
    id: 23,
    name: 'RIOT FF',
    image: 'https://yt3.googleusercontent.com/LwphD4d1s39k2YiMpdTyT5bHhuv9NvOiMRJzwiyxiqk8AMfRVa1iVijUNvpInksahtn7cKeA_Q=s160-c-k-c0x00ffffff-no-rj',
    initialText: `~~RIOT FF~~ is a popular ~~Free Fire Content Creator~~ on YouTube, known for his ~~Free Fire~~ Gameplay and Shorts.`,
    extraText: `He have a large following on Youtube, with millions of Subscribers. The creator, whose real name is Suhel, started with a dream of becoming famous and has achieved significant success, thanking their audience for their support. ~~RIOT FF's~~ YouTube channel features various videos, including gameplay, reveals, and live streams.`,
    keywords: ['riot ff', 'riot free fire', 'riot gameplay', 'riot', 'rito', 'free fire india', 'indian'],
    channelId: 'UCn9L7njJfMFD8DGY-RQI9-A'
  },
  {
    id: 24,
    name: 'Senzy FF',
    image: 'https://yt3.googleusercontent.com/d2gwbCy7K2bWghaHT9akzciHvyAsyoM3KZHZ3SLsulUXa7LuhTSMuW3RGQL6sRH5oqz-jjE3QA=s160-c-k-c0x00ffffff-no-rj',
    initialText: `~~<a href="https://www.youtube.com/@Senzy_King" target="_blank" rel="noopener noreferrer">Senzy FF</a>~~ is a small but passionate Content Creator in the ~~Free Fire Community~~. He consistently uploads gameplay, tips, and engaging clips for his growing audience.`,
    extraText: `Despite facing tough competition, he stays dedicated to improving his content quality. His dream is to build a loyal fanbase and make a name among top ~~Free Fire Creators~~.
    ~~Senzy FF~~ often experiments with new strategies and creative editing styles. Though the journey is challenging, his love for the game keeps him ~~motivated~~.
    Every video he uploads is a step closer to his goals in the ~~Free Fire world~~. With hard work and persistence, ~~Senzy FF~~ hopes to ~~shine~~ in the community soon.`,
    keywords: ['senzy', 'senzyy', 'senzy ff', 'senzy free fire', 'Senzy FF', 'Gamer', 'Free Fire'],
    channelId: 'UCkSi4XdvgrchpY5P4FB4UCg'
  },
  {
  id: 25,
  name: 'Imran Khan',
  image: 'https://i.pinimg.com/736x/e8/57/95/e85795359d0b973891639d340626c4dd.jpg',
  initialText: `~~<a href="https://en.wikipedia.org/wiki/Imran_Khan" target="_blank" rel="noopener noreferrer">Imran Ahmed Khan Niazi</a>~~ (born 5 October 1952) is a Pakistani politician, philanthropist, and former cricketer who served as the 22th prime minister of Pakistan from August 2018 until April 2022.`,
  extraText: `He is the founder of the political party ~~Pakistan Tehreek-e-Insaaf (PTI)~~ and was its chairman from 1996 to 2023.
  Born in Lahore, Khan graduated from Keble College, Oxford. He began his international cricket career in a ~~1971~~ Test series against England.
  Khan learned reverse swing bowling from ~~<a href="https://en.wikipedia.org/wiki/Sarfraz_Nawaz" target="_blank" rel="noopener noreferrer">Sarfraz Nawaz</a>~~ and passed on this technique to ~~Wasim Akram~~ and ~~Waqar Younis~~, who developed and popularised it in subsequent years.
  He was named one of the Wisden Cricketers of the Year in 1983. Khan is also credited with advancing the idea of neutral umpiring in cricket during his captaincy.`,
  keywords: ['imran khan', 'khan', 'kahn', 'captain', 'kaptaan', 'king', '804'],
},

  {
    id: 26,
    name: 'Nawaz Sharif',
    image: 'https://i.pinimg.com/736x/81/2d/61/812d61aa8e1bdbbb9a83416066389522.jpg',
    initialText: `~~<a href="https://en.wikipedia.org/wiki/Nawaz_Sharif" target="_blank" rel="noopener noreferrer">Mian Muhammad Nawaz Sharif</a>~~ (born 25 December 1949) is a Pakistani politician and businessman who served as the 12th prime minister of Pakistan for three non-consecutive terms, first serving from 1990 to 1993, then from 1997 to 1999 and later from 2013 to 2017.`,
    extraText: `He is the longest-serving prime minister in the country's history, having served a total of more than 9 years across three tenures; with each term ending in his ousting.
    
    Born into the upper-middle-class Sharif family in Lahore, Punjab, Nawaz is the son of Muhammad Sharif, the founder of Ittefaq and Sharif groups.
    
    ~~Nawaz~~ studied business at ~~Government College~~ and law at the ~~University of Punjab~~. ~~Nawaz~~ entered into politics in 1981, when he was appointed by President Zia as the minister of finance for the province of Punjab.
    
    `,
    keywords: ['nawaz sharif', 'muhammad nawaz sharif', 'sharif', 'mian muhammad', 'mian muhammad nawaz sharif', 'mian nawaz sharif', 'muhammad nawaz'],
  },
  {
    id: 27,
    name: 'Shehbaz Sharif',
    image: 'https://i.pinimg.com/736x/e7/bd/8c/e7bd8c1047460b343b9cd95720f491aa.jpg',
    initialText: `~~<a href="https://en.wikipedia.org/wiki/Shehbaz_Sharif" target="_blank" rel="noopener noreferrer">Shehbaz Sharif</a>~~ (born 23 September 1951) is a Pakistani politician and businessman who has served as the 20th prime minister of Pakistan since March 2024, having previously been in the role between April 2022 to August 2023.`,
    extraText: `He has also served as the president of the Pakistan Muslim League (N) and chief minister of Punjab three times, making him the longest-serving person in the role.
    
    He was also serving as Member of the National Assembly of Pakistan since 13 August 2018, having same post in 1990 to 1993.`,
    keywords: ['shehbaz', 'sharif', 'shehbaz sharif', 'mian muhammad', 'mian', 'mian muhammad shehbaz sharif', 'muhammad shehbaz'],
  },

  {
    id: 28,
    name: 'Whiten 69',
    image: 'https://yt3.googleusercontent.com/fwK_A1I1HmsxUzNfcpALtm-KWQcQ5IBWDvddoJtglwwjdJGIgZffJStRTtQ26hQ__08WLsfQjA=s160-c-k-c0x00ffffff-no-rj',
    initialText: `~~<a href="https://www.youtube.com/@whitenfreefire" target="_blank" rel="noopener noreferrer">Whiten 69</a>~~`,
    extraText: `Soon...`,
    keywords: ['whiten', '69', 'whiten 69', '69 whiten', 'whiten ff', 'ff', 'whiten 69 ff'],
    channelId: 'UCxdjia6wWB-TEROEgeEf4pQ'
  },
  {
    id: 29,
    name: 'Absolute CLassy',
    image: 'https://yt3.googleusercontent.com/NubJwh0L78WZetv61-c8mTMdEGionFy9hgZV8cbVivlquIyFQX4mIzmXozAfj4VTfJjH12qmVQ=s160-c-k-c0x00ffffff-no-rj',
    initialText: `The YouTuber "~~<a href="https://www.youtube.com/@classyffprashant" target="_blank" rel="noopener noreferrer">Classy FF</a>~~" is suspected of using hacks or panels in Garena Free Fire. His videos clearly display unnatural gameplay mechanics that suggest the use of external tools, including enhanced aim, wallhacks, and other unfair advantages.`,
    extraText: `This kind of content not only violates the game's fair play policies but also promotes hacking within the gaming community, which is against YouTube's and Free Fire's community guidelines.
    
    Evidence of hacking can be observed in multiple uploads where the player's movements, accuracy, and visibility of enemies through obstacles are highly suspicious and not achievable through legitimate means. Reporting such content is essential to maintain a fair gaming environment.`,
    keywords: ['classy', 'absolute classy', 'classy 2', 'classy ff'],
    channelId: 'UClhtp4kqz46ws_x4L1M0MKg'
  },
  {
    id: 30,
    name: 'Cristiano Ronaldo',
    image: 'https://i.pinimg.com/736x/97/8d/fe/978dfe2eed24660a344f07c8784065c8.jpg',
    initialText: `~~<a href="https://en.wikipedia.org/wiki/Cristiano_Ronaldo" target="_blank" rel="noopener noreferrer">Cristiano Ronaldo</a>~~ (born 5 February 1985) is a Portuguese professional footballer who plays as a forward for and captains both Saudi Pro League club Al-Nassr and the Portugal national team.`,
    extraText: `Nicknamed CR7, he is widely regarded as one of the greatest players in history, and has won numerous individual accolades throughout his career, including five Ballon d'Or awards, a record three UEFA Men's Player of the Year Awards, four European Golden Shoes, and was named five times the world's best player by FIFA.
    He has won 34 trophies in his career, including five UEFA Champions Leagues and the UEFA European Championship. He holds the records for most goals (140) and assists (42) in the Champions League, goals (14) and assists (8) in the European Championship, and most international appearances (221) and international goals (138). He has made over 1,200 professional career appearances, the most by an outfield player, and has scored over 900 official senior career goals for club and country, making him the top goalscorer of all time.`,
    keywords: ['ronaldo', 'cristiano ronaldo', 'cr7', 'chrono', 'rolando'],
    channelId: 'UCtxD0x6AuNNqdXO9Wp5GHewnm'
  },
  {
    id: 31,
    name: 'Mr Beast',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/MrBeast_2023_%28cropped%29.jpg/250px-MrBeast_2023_%28cropped%29.jpg',
    initialText: `~~<a href="https://en.wikipedia.org/wiki/MrBeast" target="_blank" rel="noopener noreferrer">MrBeast</a>~~ (born May 7, 1998), commonly known by his online alias MrBeast, is an American YouTuber, media personality, and businessman. His YouTube videos, where he often hosts elaborate challenges and philanthropic efforts, are known for their fast pace and high production values.`,
    extraText: `With over 415 million subscribers, he has the most subscribers of any YouTube channel, he is also the third-most-followed creator on TikTok, with over 115 million followers.
    Donaldson was born in Wichita, Kansas and raised in Greenville, North Carolina. He began posting videos to YouTube in early 2012 under the handle MrBeast6000. His early content ranged from Let's Plays to "videos estimating the wealth of other YouTubers".`,
    keywords: ['beast', 'mrbeast', 'mr beast', '', '', '', ''],
    channelId: 'UCX6OQ3DkcsbYNE6H8uQQuVA'
  },
  {
    id: 32,
    name: 'Tube Sensei',
    image: 'https://yt3.googleusercontent.com/WfScp9lyYFU82HqdENbPooAGrLXCLgWQO6P-thj5nrBYUeFh9JS9hzDkzPBZC5eoWDXSjiG7vCw=s160-c-k-c0x00ffffff-no-rj',
    initialText: `~~<a href="https://www.youtube.com/@TubeSenseiofficial" target="_blank" rel="noopener noreferrer">Tube Sensei</a>~~ is a faceless channel focused on helping creators master YouTube growth strategies. Their banner and intro pitch emphasize unlocking the "secrets of YouTube success"—from content creation and SEO optimization to algorithm hacks`,
    extraText: `The videos typically feature voiceover narration, animated text, visuals, and thumbnails with an illustrated “sensei” figure wearing sunglasses and a hoodie. Thumbnails often highlight growth stats, bold text, and a character graphic, reinforcing branding across the channel.`,
    keywords: ['tube sensei', 'tube', 'sensei', '', '', '', ''],
  },

  {
    id: 33,
    name: 'P9 GAMING YT',
    image: 'https://yt3.googleusercontent.com/NWQfqxOazzofVLNf9rBmoKJSzbLCscxWMeghM6OX4QSJ6QZ6sEL73Pt5m72uEd_CskDQPaQN=s160-c-k-c0x00ffffff-no-rj',
    initialText: `~~<a href="https://www.youtube.com/@P9GAMINGYT" target="_blank" rel="noopener noreferrer">P9 GAMING YT</a>~~ is a popular Free Fire content creator from Pakistan known for his exceptional headshot skills. His real name is Amjid Khan and he has gained a solid reputation in the Pakistani gaming community.`,
    extraText: `P9 is admired for his precise aim and fast-paced gameplay, which makes his videos thrilling to watch. He regularly uploads content showcasing ranked matches, intense 1v1 challenges, and custom room battles. His channel has crossed over 200K subscribers with millions of views. P9 is also known for sharing sensitivity settings and tips to help others improve their headshot accuracy.
    His gameplay with weapons like M500 and USP is especially appreciated by fans. The editing in his videos is sharp, keeping the audience engaged throughout. P9 GAMING YT continues to grow rapidly due to his consistent uploads and skillful play. He is considered one of the top headshot players in Pakistan’s Free Fire community.`,
    keywords: ['p9', 'p9 gaming', 'p9 gaming yt', 'p9 ff', 'p9 free fire', '', ''],
  },

  {
    id: 34,
    name: 'AJ FF',
    image: 'https://yt3.googleusercontent.com/lanREiYwXPrvWAvYbAwOFQyoFA03zCjckx_Ikd518HeYTR-cvVPCmaF6VEL0zrWYzkJN47TA8Q=s160-c-k-c0x00ffffff-no-rj',
    initialText: `AJ FF, also known as Abrar Junaid, is a popular Pakistani Free Fire player and content creator whose channel centers around one-tap headshot montages, full ranked matchplays, and entertaining custom-room battles.`,
    extraText: `He blends professional-level gameplay with humorous elements, often featuring pranks like "Friendly Fire Prank" during his matches.
    AJ FF’s collaborations with other top Pakistani Free Fire players enhance the variety and reach of his content. 
    AJ FF remains a versatile and engaging figure in the Pakistani Free Fire esports scene. `,
    keywords: ['aj', 'aj ff', 'takla', 'aj free fire', '', '', ''],
  },

  {
    id: 35,
    name: 'Babar Azam',
    image: 'https://i.pinimg.com/736x/60/39/a0/6039a0358eb0ea2c85788a1eb56cffb7.jpg',
    initialText: `~~Babar Azam~~ is a world-class Pakistani cricketer renowned for his elegant batting across all formats. A right-handed top-order batsman from Lahore, he made his ODI debut in 2015 and quickly rose through the ranks.`,
    extraText: `Known for consistency and technique, he holds the record as the fastest to 1,000 T20I runs and has multiple centuries in Tests and ODIs.
    He reached the pinnacle of ICC rankings in both ODIs and T20Is, and his partnerships, like the 197-run stand with Mohammad Rizwan, cemented his status as Pakistan’s premier batsman. As captain, he led Pakistan to series wins, including breaking a two-decade drought in ODIs against Australia and guiding the side deep into World Cups.
    In 2024, he was reappointed as white-ball captain ahead of the T20 World Cup, but by late 2024 stepped down again to focus on his batting and manage workload.
    While his Test form dipped, leading to a temporary exclusion, former teammates and coaches expressed confidence in his ability to bounce back`,
    keywords: ['bobby', 'boby', 'babar azam', 'babar', 'azam', '', ''],
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