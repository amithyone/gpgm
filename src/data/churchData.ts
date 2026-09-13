import {
  FoundationScripture,
  StatementOfFaithItem,
  FastingScripture,
  LeadershipMember,
  ChurchObjective,
  ChurchEvent,
  PrayerRequest,
  ScripturePrayerCategory,
  ArticleSlide
} from '../types/church';

export const FOUNDATIONAL_SCRIPTURES: FoundationScripture[] = [
  {
    reference: 'Isaiah 56:7',
    text: 'Even them will I bring to my holy mountain, and make them joyful in my house of prayer: their burnt offerings and their sacrifices shall be accepted upon mine altar; for mine house shall be called an house of prayer for all people.',
    theme: 'House of Prayer'
  },
  {
    reference: 'Romans 8:26, 34',
    text: 'Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered... Who is he that condemneth? It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us.',
    theme: 'Intercession of the Spirit & Christ'
  },
  {
    reference: 'Matthew 5:6',
    text: 'Blessed are they which do hunger and thirst after righteousness: for they shall be filled.',
    theme: 'Thirst for Righteousness'
  },
  {
    reference: 'Matthew 6:33',
    text: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
    theme: 'Kingdom First'
  },
  {
    reference: 'Hebrews 11:6',
    text: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.',
    theme: 'Unwavering Faith'
  },
  {
    reference: 'Philippians 2:13',
    text: 'For it is God which worketh in you both to will and to do of his good pleasure.',
    theme: 'God Working In Us'
  },
  {
    reference: 'Jude 1:20',
    text: 'But ye, beloved, building up yourselves on your most holy faith, praying in the Holy Ghost.',
    theme: 'Praying in the Holy Ghost'
  },
  {
    reference: 'Acts 20:32',
    text: 'And now, brethren, I commend you to God, and to the word of his grace, which is able to build you up, and to give you an inheritance among all them which are sanctified.',
    theme: 'The Word of His Grace'
  }
];

export const CHURCH_OBJECTIVES: ChurchObjective[] = [
  {
    id: 1,
    title: 'Spiritual Growth & Faith Building',
    description: 'To promote spiritual growth and strengthen the faith of members through collective prayer, worship, fellowship, and the teaching of Scripture.',
    iconName: 'Sprout'
  },
  {
    id: 2,
    title: 'Intercessory Support for Families',
    description: 'To provide prayer, encouragement, and spiritual support to individuals and families experiencing challenges, difficulties, or personal needs.',
    iconName: 'HeartHandshake'
  },
  {
    id: 3,
    title: 'Teaching the Undiluted Word',
    description: 'To promote the teaching and application of the undiluted Word of God as the foundation for Christian living and spiritual development.',
    iconName: 'BookOpen'
  },
  {
    id: 4,
    title: 'Prayer Gatherings & Retreats',
    description: 'To organise prayer meetings, worship gatherings, Bible studies, seminars, retreats, and other activities that promote spiritual growth and Christian fellowship.',
    iconName: 'Flame'
  },
  {
    id: 5,
    title: 'Caring Christian Community',
    description: 'To encourage members to support one another in times of need and to foster a strong, caring, and united Christian community.',
    iconName: 'Users'
  },
  {
    id: 6,
    title: 'Christian Values & Integrity',
    description: 'To promote Christian values, love, compassion, integrity, forgiveness, and service to others within the community.',
    iconName: 'ShieldCheck'
  },
  {
    id: 7,
    title: 'Charitable & Practical Relief',
    description: 'To provide appropriate charitable assistance and practical support to vulnerable, disadvantaged, or distressed persons in accordance with the charity\'s resources and objectives.',
    iconName: 'Gift'
  },
  {
    id: 8,
    title: 'Equipping Spiritual Gifts',
    description: 'To encourage members to use their gifts, talents, and resources in serving God and supporting the wider community.',
    iconName: 'Sparkles'
  },
  {
    id: 9,
    title: 'Collaborative Kingdom Partnerships',
    description: 'To establish partnerships and collaborate with churches, Christian organisations, community groups, and other charitable bodies in furtherance of the charity\'s objectives.',
    iconName: 'Globe'
  },
  {
    id: 10,
    title: 'Conducive Lawful Activities',
    description: 'To undertake any other lawful activities that are incidental or conducive to achieving the ministry and charitable objectives.',
    iconName: 'CheckCircle2'
  }
];

export const STATEMENT_OF_FAITH: StatementOfFaithItem[] = [
  {
    title: 'Belief in the Trinity',
    description: 'We believe in the one eternal God revealed in three persons: God the Father, God the Son (Jesus Christ), and God the Holy Spirit.',
    scriptures: [
      {
        ref: 'Genesis 1:26',
        text: 'And God said, Let us make man in our image, after our likeness: and let them have dominion over the fish of the sea, and over the fowl of the air, and over the cattle, and over all the earth, and over every creeping thing that creepeth upon the earth.'
      },
      {
        ref: 'Matthew 3:16-17',
        text: 'As soon as Jesus was baptized, He went up out of the water. Suddenly the heavens were opened, and He saw the Spirit of God descending like a dove and resting on Him. And a voice from heaven said, "This is My beloved Son, in whom I am well pleased!"'
      }
    ]
  },
  {
    title: 'The Deity & Humanity of Jesus Christ',
    description: 'Jesus manifested both divine and human nature. He was born in the flesh, was crucified, died, and physically rose again from the dead.',
    scriptures: [
      {
        ref: 'Romans 1:3-4',
        text: 'Concerning his Son Jesus Christ our Lord, which was made of the seed of David according to the flesh; And declared to be the Son of God with power, according to the spirit of holiness, by the resurrection from the dead.'
      }
    ]
  },
  {
    title: 'Salvation Through Jesus Christ Alone',
    description: 'Salvation is exclusively through Jesus Christ, who is the Saviour and Redeemer of all who believe upon His holy name.',
    scriptures: [
      {
        ref: 'John 3:16',
        text: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.'
      },
      {
        ref: 'John 14:6',
        text: 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.'
      }
    ]
  },
  {
    title: 'The Absolute Authority of Holy Scripture',
    description: 'We revere the Holy Scriptures as the inspired, infallible Word of God, fully authoritative for doctrine, reproof, correction, and righteousness.',
    scriptures: [
      {
        ref: '2 Timothy 3:16',
        text: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness.'
      }
    ]
  },
  {
    title: 'The Call to Love, Service & Continual Prayer',
    description: 'Every believer is ordained to walk in active love, practical service to the needy, and habitual unceasing prayer.',
    scriptures: [
      {
        ref: '2 Timothy 3:17',
        text: 'That the man of God may be perfect, throughly furnished unto all good works.'
      }
    ]
  },
  {
    title: 'Saved by Grace, Living by Faith',
    description: 'We are justified and preserved by sovereign grace through faith, recognizing that all Kingdom fruitfulness is worked in us by God\'s good pleasure.',
    scriptures: [
      {
        ref: 'Ephesians 2:8',
        text: 'For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.'
      },
      {
        ref: 'Philippians 2:13',
        text: 'For it is God which worketh in you both to will and to do of his good pleasure.'
      },
      {
        ref: 'Hebrews 11:6',
        text: 'But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him.'
      }
    ]
  }
];

export const FASTING_SCRIPTURES: FastingScripture[] = [
  {
    reference: 'Jeremiah 33:3',
    text: 'Call unto me, and I will answer thee, and show thee great and mighty things, which thou knowest not.'
  },
  {
    reference: 'Daniel 9:3',
    text: 'And I set my face unto the Lord God, to seek by prayer and supplications, with fasting, and sackcloth, and ashes.'
  },
  {
    reference: 'Matthew 4:4',
    text: 'But he answered and said, It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God.'
  },
  {
    reference: 'Luke 5:16',
    text: 'And he withdrew himself into the wilderness and prayed.'
  },
  {
    reference: 'Luke 18:1',
    text: 'And he spake a parable unto them to this end, that men ought always to pray, and not to faint.'
  },
  {
    reference: 'Luke 21:36',
    text: 'Watch ye therefore, and pray always, that ye may be accounted worthy to escape all these things that shall come to pass, and to stand before the Son of man.'
  },
  {
    reference: 'Ephesians 6:18',
    text: 'Praying always with all prayer and supplication in the Spirit, and watching thereunto with all perseverance and supplication for all saints.'
  },
  {
    reference: 'Colossians 4:2',
    text: 'Continue in prayer, and watch in the same with thanksgiving.'
  },
  {
    reference: '1 Peter 4:7',
    text: 'But the end of all things is at hand: be ye therefore sober and watch unto prayer.'
  },
  {
    reference: 'Matthew 17:21',
    text: 'Howbeit this kind goeth not out but by prayer and fasting.'
  }
];

export const LEADERSHIP_TEAM: LeadershipMember[] = [
  {
    role: 'Supreme Head of the Church',
    title: 'Our Lord & Saviour',
    name: 'Jesus Christ',
    scriptureAnchor: 'Ephesians 5:23 & Colossians 1:18',
    description: 'First and foremost, JESUS is the Head of the church and in this dispensation, we are under the influence of the HOLY SPIRIT which does not contradict the scriptures.',
    responsibilities: [
      'The chief cornerstone and author of our salvation',
      'The pre-eminent one in all ministry affairs',
      'Guidance through the Holy Spirit and the Holy Scriptures'
    ]
  },
  {
    role: 'General Overseer & Lead Coordinator',
    title: 'Lead Coordinator / Vision Bearer',
    name: 'Roland Tewure Fominyam',
    scriptureAnchor: 'Acts 6:3-4, Philippians 4:8',
    description: 'Vision bearer of Grace Prayer Group Ministries as guided by the Word of God. Committed continually to prayer, the ministry of the Word, and equipping the saints.',
    responsibilities: [
      'Providing spiritual direction and oversight for GPGM',
      'Organizing regular prayer meetings, retreats, and special vigils',
      'Ensuring strict adherence to the undiluted Word of God and statement of faith',
      'Overseeing leadership appointments and ministry growth'
    ]
  },
  {
    role: 'Assistant Coordinator',
    title: 'Assistant Coordinator',
    name: 'Celine Atarah Ekanem',
    scriptureAnchor: '3 John 1:12, Philippians 4:8',
    description: 'Assisting the Lead Coordinator in steering the group\'s activities, coordinating prayer schedules, and standing in spiritual partnership across all initiatives.',
    responsibilities: [
      'Assisting in day-to-day coordination of prayer schedules',
      'Fostering pastoral care and fellowship among members',
      'Supporting leadership administration during special meetings and vigils',
      'Maintaining spiritual and moral integrity within the fellowship'
    ]
  },
  {
    role: 'Trustee & Governance Steward',
    title: 'Trustee',
    name: 'Agwa Brenda Chick',
    scriptureAnchor: 'Acts 6:3, 1 Timothy 1:19',
    description: 'Serving as foundational Trustee, ensuring legal compliance, governance fidelity to the Articles of Association, and transparent stewardship of resources.',
    responsibilities: [
      'Fostering organizational transparency and accountability',
      'Safeguarding the foundational objectives of the ministry',
      'Overseeing ministry records and governance protocols'
    ]
  }
];

export const CHURCH_EVENTS: ChurchEvent[] = [
  {
    id: 'evt-1',
    title: 'Weekly Corporate Prayer & Worship Gathering',
    day: 'Every Sunday',
    time: '10:00 AM - 12:30 PM (GMT)',
    type: 'Regular Meeting',
    description: 'A holy convocation of collective prayer, spiritual worship, scriptural exposition, and seeking God\'s face in spirit and truth.',
    location: 'Main Sanctuary & Online Broadcast',
    scripture: 'Isaiah 56:7'
  },
  {
    id: 'evt-2',
    title: 'Undiluted Word & Bible Study',
    day: 'Every Wednesday',
    time: '7:00 PM - 8:30 PM (GMT)',
    type: 'Bible Study',
    description: 'In-depth systematic study of the Holy Scriptures (KJV), grounding believers in sound doctrine, righteousness, and holy living.',
    location: 'Sanctuary Fellowship Hall & Zoom Live',
    scripture: '2 Timothy 3:16-17'
  },
  {
    id: 'evt-3',
    title: 'Fasting, Intercession & Spiritual Warfare',
    day: 'Every Friday',
    time: '12:00 PM - 3:00 PM (GMT) & Evening Wrap-up',
    type: 'Fasting & Prayer',
    description: 'Dedicated corporate fasting and prevailing intercession for members, families in distress, the global Church, and revival.',
    location: 'Prayer Chamber & Online Intercessory Room',
    scripture: 'Matthew 17:21, Daniel 9:3'
  },
  {
    id: 'evt-4',
    title: 'Monthly All-Night Prayer Vigil ("Watch & Pray")',
    day: 'Last Friday of Every Month',
    time: '10:00 PM - 4:00 AM (GMT)',
    type: 'Night Vigil',
    description: 'Tarrying before the Lord in intense midnight supplication, praise, breaking yokes, and receiving prophetic direction.',
    location: 'Main Sanctuary & 24/7 Prayer Line',
    scripture: 'Luke 21:36, Luke 18:1',
    isSpecial: true
  },
  {
    id: 'evt-5',
    title: 'Annual Spiritual Growth & Fasting Retreat',
    day: 'Quarterly Season of Consecration',
    time: '3-Day Retreat (Thursday - Saturday)',
    type: 'Special Retreat',
    description: 'A consecrated season of withdrawal into the presence of God for spiritual renewal, deep teaching, fellowship, and empowerment.',
    location: 'GPGM Mount of Prayer & Regional Centers',
    scripture: 'Luke 5:16, Hebrews 11:6',
    isSpecial: true
  }
];

export const SCRIPTURE_PRAYER_GUIDES: ScripturePrayerCategory[] = [
  {
    id: 'sp-1',
    title: 'Praying for God’s Mercy, Grace & Favor',
    scriptureRef: 'Hebrews 4:16 (KJV)',
    verseKJV: 'Let us therefore come boldly unto the throne of grace, that we may obtain mercy, and find grace to help in time of need.',
    prayerPoint: 'Lord God of all grace, I approach Your throne boldly through the blood of Jesus Christ. Pour out Your abundant mercy over my weaknesses, forgive my transgressions, and grant me supernatural grace for every battle.',
    confession: 'I am accepted in the Beloved. Grace empowers my footsteps, and His mercy speaks for me daily.'
  },
  {
    id: 'sp-2',
    title: 'Seeking the Kingdom & Divine Righteousness',
    scriptureRef: 'Matthew 6:33 (KJV)',
    verseKJV: 'But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.',
    prayerPoint: 'Father in heaven, align my heart and desires with Your Kingdom priority. Deliver me from worldly anxieties and the deceitfulness of riches. Grant me a burning hunger for Your righteousness above all else.',
    confession: 'I seek first God’s kingdom; every blessing, health, provision, and divine protection is added unto my household.'
  },
  {
    id: 'sp-3',
    title: 'Intercession & Spiritual Weakness',
    scriptureRef: 'Romans 8:26 (KJV)',
    verseKJV: 'Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered.',
    prayerPoint: 'Holy Spirit, my Divine Comforter and Helper, take hold together with me in my human limitations. Pray through me in line with the will of God, and let every hidden snare of the adversary be exposed and dismantled.',
    confession: 'The Spirit of God intercedes for me. I do not walk alone; divine strength floods my inner man.'
  },
  {
    id: 'sp-4',
    title: 'Overcoming Impossibilities Through Faith & Fasting',
    scriptureRef: 'Matthew 17:20-21 (KJV)',
    verseKJV: 'If ye have faith as a grain of mustard seed, ye shall say unto this mountain, Remove hence to yonder place; and it shall remove; and nothing shall be impossible unto you. Howbeit this kind goeth not out but by prayer and fasting.',
    prayerPoint: 'Heavenly Father, as I humble my soul in fasting and prayer according to Your Word, I command every mountain of delay, sickness, debt, and spiritual stagnation to move in the name of Jesus Christ!',
    confession: 'By faith, nothing is impossible unto me. Mountains are leveled and valleys are exalted by the power of God.'
  },
  {
    id: 'sp-5',
    title: 'Divine Healing & Health in the House of Prayer',
    scriptureRef: 'Jeremiah 33:3 & Isaiah 53:5 (KJV)',
    verseKJV: 'Call unto me, and I will answer thee, and show thee great and mighty things, which thou knowest not... with his stripes we are healed.',
    prayerPoint: 'Jehovah Rapha, the Lord that healeth me, I invoke the stripes of Jesus over my body, my mind, and my family members. Consume every root of infirmity and restore total wholeness.',
    confession: 'Christ took my sicknesses and carried my pains. I walk in divine vitality and sound health.'
  },
  {
    id: 'sp-6',
    title: 'Building Faith in the Holy Ghost',
    scriptureRef: 'Jude 1:20 (KJV)',
    verseKJV: 'But ye, beloved, building up yourselves on your most holy faith, praying in the Holy Ghost.',
    prayerPoint: 'Lord Jesus, fill me afresh with the Holy Ghost and with power. As I lift my voice in prayer and study Your holy Word, elevate my spiritual antenna, strengthen my inner man, and keep me in the love of God.',
    confession: 'My spirit is fortified. I pray effectively in the Holy Ghost, standing victorious against every wind of doctrine.'
  }
];

export const INITIAL_PRAYER_REQUESTS: PrayerRequest[] = [
  {
    id: 'pr-1',
    name: 'Sister Mary K.',
    category: 'Healing',
    request: 'Please join me in prayer for my mother undergoing medical diagnosis this week. We are standing on Jeremiah 33:3 and Isaiah 53:5 for complete healing and a good report.',
    isConfidential: false,
    prayingCount: 28,
    createdAt: '2 days ago',
    scriptureRef: 'Jeremiah 33:3'
  },
  {
    id: 'pr-2',
    name: 'Brother Emmanuel T.',
    category: 'Financial & Career',
    request: 'Seeking God\'s divine direction and open doors regarding employment and visa regularization. Believing Matthew 6:33 that as I seek His Kingdom first, all things shall be added.',
    isConfidential: false,
    prayingCount: 42,
    createdAt: '3 days ago',
    scriptureRef: 'Matthew 6:33'
  },
  {
    id: 'pr-3',
    name: 'The Ngu Family',
    category: 'Family & Marriage',
    request: 'Prayer for restoration of peace in our home and for our youth to stand firm against worldly pressures, walking in obedience and purity of heart.',
    isConfidential: false,
    prayingCount: 35,
    createdAt: '4 days ago',
    scriptureRef: 'Philippians 4:8'
  },
  {
    id: 'pr-4',
    name: 'Grace Fellowship Member',
    category: 'Spiritual Growth',
    request: 'Desiring a deeper prayer life and consistent fasting discipline. Praying that the Spirit helps my infirmities as written in Romans 8:26.',
    isConfidential: false,
    prayingCount: 51,
    createdAt: '5 days ago',
    scriptureRef: 'Romans 8:26'
  },
  {
    id: 'pr-5',
    name: 'Hannah & David',
    category: 'Fruit of the Womb',
    request: 'Believing the Lord for the fruit of the womb after 4 years of marriage. We believe that God answers prayer and is a rewarder of those that diligently seek Him.',
    isConfidential: false,
    prayingCount: 64,
    createdAt: '1 week ago',
    scriptureRef: 'Hebrews 11:6'
  }
];

export const ARTICLES_SLIDES_DATA: ArticleSlide[] = [
  {
    slideNumber: 1,
    title: 'Title Slide',
    subtitle: 'Official Foundation Document',
    category: 'Foundations',
    contentLines: [
      'Article of Association for Grace Prayer Group Ministries (GPGM)',
      'Official registered organizational and governance charter.'
    ]
  },
  {
    slideNumber: 2,
    title: 'Foundational Scriptures & Ministry Calling',
    subtitle: 'The Place & House of Praise and Worship',
    category: 'Foundations',
    keyScriptures: ['Isaiah 56:7', 'Romans 8:26, 34', 'Matthew 5:6', 'Matthew 6:33', 'Hebrews 11:6'],
    contentLines: [
      'Isaiah 56:7 — "Even them will I bring to my holy mountain, and make them joyful in my house of prayer: their burnt offerings and their sacrifices shall be accepted upon mine altar; for mine house shall be called an house of prayer for all people."',
      'Romans 8:26, 34 — "Likewise the Spirit also helpeth our infirmities: for we know not what we should pray for as we ought: but the Spirit itself maketh intercession for us with groanings which cannot be uttered... It is Christ that died, yea rather, that is risen again, who is even at the right hand of God, who also maketh intercession for us."',
      'Matthew 5:6 — "Blessed are they which do hunger and thirst after righteousness: for they shall be filled."',
      'Matthew 6:33 — "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you."',
      'Hebrews 11:6 — "But without faith it is impossible to please him: for he that cometh to God must believe that he is, and that he is a rewarder of them that diligently seek him."',
      'Motto & Declaration: Grace Prayer Group Ministries, The Place & House of Praise and Worship.',
      'We pray the scriptures, calling upon the name of the LORD in spirit and in truth, seeking after HIS mercy and grace in pursuit of the righteousness of HIS Kingdom by faith,',
      'In obedience, in patience, humility and hope, and to occupy till HE comes. (All quotations from KJV)'
    ]
  },
  {
    slideNumber: 3,
    articleNumber: 'Article I',
    title: 'Name, Purpose, Mission, Vision & Objectives',
    subtitle: 'Article I: Name and Purpose',
    category: 'Identity',
    keyScriptures: ['Philippians 2:13', 'Jude 1:20', 'Acts 20:32'],
    contentLines: [
      '1.1 Name: The name of this group shall be GRACE PRAYER GROUP MINISTRIES (hereinafter referred to as "GPGM"). Philippians 2:13 — "For it is God which worketh in you both to will and to do of his good pleasure."',
      '1.2 Purpose:',
      '• Mission Statement: To foster spiritual growth, strengthen faith, and build a Christ-centred community through prayer, worship, fellowship, and the teaching of the undiluted Word of God.',
      '• Vision Statement: To build a united and spiritually strengthened community of believers who grow in faith, support one another, and live according to the truth of Scripture.',
      'Objectives of GPG Ministries:',
      '1. To promote spiritual growth and strengthen the faith of members through collective prayer, worship, fellowship, and the teaching of Scripture.',
      '2. To provide prayer, encouragement, and spiritual support to individuals and families experiencing challenges, difficulties, or personal needs.',
      '3. To promote the teaching and application of the undiluted Word of God as the foundation for Christian living and spiritual development.',
      '4. To organise prayer meetings, worship gatherings, Bible studies, seminars, retreats, and other activities that promote spiritual growth and Christian fellowship.',
      '5. To encourage members to support one another in times of need and to foster a strong, caring, and united Christian community.',
      '6. To promote Christian values, love, compassion, integrity, forgiveness, and service to others within the community.',
      '7. To provide appropriate charitable assistance and practical support to vulnerable, disadvantaged, or distressed persons in accordance with the charity\'s resources and objectives.',
      '8. To encourage members to use their gifts, talents, and resources in serving God and supporting the wider community.',
      '9. To establish partnerships and collaborate with churches, Christian organisations, community groups, and other charitable bodies in furtherance of the charity\'s objectives.',
      '10. To undertake any other lawful activities that are incidental or conducive to achieving the above charitable objectives.',
      'Scripture Anchors: Jude 1:20 — "But ye, beloved, building up yourselves on your most holy faith, praying in the Holy Ghost." | Acts 20:32 — "And now, brethren, I commend you to God, and to the word of his grace, which is able to build you up, and to give you an inheritance among all them which are sanctified."'
    ]
  },
  {
    slideNumber: 4,
    articleNumber: 'Article II (2.1)',
    title: 'Statement of Faith: Core Beliefs',
    subtitle: 'Article 2.1 Core Beliefs',
    category: 'Doctrine',
    keyScriptures: ['Genesis 1:26', 'Matthew 3:16-17', 'Romans 1:3-4', 'John 3:16', 'John 14:6', '2 Timothy 3:16-17', 'Ephesians 2:8', 'Philippians 2:13', 'Hebrews 11:6'],
    contentLines: [
      'The GPGM affirms the following core beliefs:',
      '• Belief in the Trinity: God the Father, God the Son (Jesus Christ), and God the Holy Spirit. (Genesis 1:26, Matthew 3:16-17)',
      '• Jesus manifested both divine and human nature. He was born in the flesh, died and rose again. (Romans 1:3-4)',
      '• Salvation is through Jesus Christ, who is the Saviour of all who believe. (John 3:16, John 14:6)',
      '• The authority of the Holy Scriptures as the inspired Word of God. (2 Timothy 3:16)',
      '• The call to live a life of love, service, and prayer as taught in the Bible. (2 Timothy 3:17)',
      '• We are saved by grace to live by faith, and the things of GOD are done by grace. (Ephesians 2:8, Philippians 2:13, Hebrews 11:6)'
    ]
  },
  {
    slideNumber: 5,
    articleNumber: 'Article II (2.2)',
    title: 'Statement of Faith: Commitment to Prayer and Fasting',
    subtitle: 'Article 2.2 Prayer as a Lifestyle',
    category: 'Doctrine',
    keyScriptures: ['Jeremiah 33:3', 'Daniel 9:3', 'Matthew 4:4', 'Luke 5:16', 'Luke 18:1', 'Luke 21:36', 'Ephesians 6:18', 'Colossians 4:2', '1 Peter 4:7', 'Matthew 17:21', 'Mark 9:29'],
    contentLines: [
      'Prayer is a lifestyle and members of GPGM shall be committed to praying regularly for each other, for the community, and for the world.',
      'Prayer shall be the foundation of all meetings and activities. We believe that GOD answers prayer.',
      'Members shall from time to time engage in prayer and fasting.',
      'Biblical Scriptural Anchors:',
      '• Jeremiah 33:3 — "Call unto me, and I will answer thee, and show thee great and mighty things, which thou knowest not."',
      '• Daniel 9:3 — "And I set my face unto the Lord God, to seek by prayer and supplications, with fasting, and sackcloth, and ashes."',
      '• Matthew 4:4 — "Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God."',
      '• Luke 5:16 — "And he withdrew himself into the wilderness and prayed."',
      '• Luke 18:1 — "Men ought always to pray, and not to faint."',
      '• Luke 21:36 — "Watch ye therefore, and pray always..."',
      '• Ephesians 6:18 — "Praying always with all prayer and supplication in the Spirit..."',
      '• Colossians 4:2 — "Continue in prayer, and watch in the same with thanksgiving."',
      '• 1 Peter 4:7 — "Be ye therefore sober and watch unto prayer."',
      '• Matthew 17:21 / Mark 9:29 — "Howbeit this kind goeth not out but by prayer and fasting."'
    ]
  },
  {
    slideNumber: 6,
    articleNumber: 'Article III (3.1-3.3)',
    title: 'Membership: Eligibility, Admission & Duties',
    subtitle: 'Article III: Membership',
    category: 'Membership',
    keyScriptures: ['Luke 18:1', 'Philippians 4:8', 'John 4:24', 'Acts 6:3'],
    contentLines: [
      'Article 3.1 Eligibility: Membership is open to all individuals who desire to join GPGM, are willing to abide by its rules, and are committed to the principles of prayer, fellowship, and spiritual growth in line with the scriptures.',
      'Article 3.2 Admission: Any individual who desires to join the GPGM must express their interest to an existing member and may be welcomed upon approval of the leadership.',
      'Article 3.3 Duties of Members:',
      '• Attend prayer meetings and participate actively in prayer (Luke 18:1).',
      '• Respect the confidentiality of personal prayer requests shared by other members.',
      '• Uphold the spiritual and moral standards of the Prayer Group as guided by scriptures.',
      '• Contribute to the spiritual well-being of the group through encouragement and support (Philippians 4:8).',
      '• Conduct themselves as true believers serving GOD in spirit and in truth (John 4:24, Acts 6:3).'
    ]
  },
  {
    slideNumber: 7,
    articleNumber: 'Article III (3.4)',
    title: 'Termination of Membership',
    subtitle: 'Article 3.4 Termination & Restoration',
    category: 'Membership',
    keyScriptures: ['1 Timothy 1:19-20'],
    contentLines: [
      'A member may resign from the GPGM at any time.',
      'Membership may also be terminated if the member is found to be in persistent violation of the group\'s principles or after repeated efforts to address behavioural or spiritual concerns.',
      '1 Timothy 1:19-20 — "Holding faith, and a good conscience; which some having put away concerning faith have made shipwreck: Of whom is Hymenaeus and Alexander; whom I have delivered unto Satan, that they may learn not to blaspheme."'
    ]
  },
  {
    slideNumber: 8,
    articleNumber: 'Article IV (4.1)',
    title: 'Leadership Structure & Spiritual Standards',
    subtitle: 'Article 4.1 Christ as Head & Human Leadership',
    category: 'Leadership',
    keyScriptures: ['Ephesians 5:23', 'Colossians 1:18', 'Acts 6:3-4', 'Philippians 4:8', '3 John 1:12'],
    contentLines: [
      'First and foremost, JESUS is the Head of the church and in this dispensation, we are under the influence of the HOLY SPIRIT which does not contradict the scriptures. (Ephesians 5:23, Colossians 1:18)',
      'Anyone in leadership must reflect Acts 6:3-4 (honest report, full of the Holy Ghost and wisdom, giving themselves continually to prayer and to the ministry of the word), Philippians 4:8, and 3 John 1:12 (good report of all men, and of the truth itself).',
      'On the human side of things, leadership consists of:',
      '• The General Overseer: The vision bearer as guided by the Word of God.',
      '• Lead Coordinator: The primary organizer responsible for overseeing GPGM activities, including meetings, prayer schedules, and special events.',
      '• Assistant Coordinators: Individuals who assist the Lead Coordinator and step in when unavailable.',
      '• Prayer Leaders: Designated members to lead specific prayers, Bible readings, or prayer sessions during meetings.',
      '• Secretary, Treasurer, Finance Secretary (if applicable): Responsible for managing any funds collected, ensuring financial transparency, and reporting to the group.'
    ]
  },
  {
    slideNumber: 9,
    articleNumber: 'Article IV (4.2)',
    title: 'Election & Appointment of Leaders',
    subtitle: 'Article 4.2 Selection Principles',
    category: 'Leadership',
    contentLines: [
      'Leaders can or may be appointed by the General Overseer.',
      'Leaders shall be chosen by the members of GPGM during an annual meeting or as the need may arise, not motivated by any selfish ambition but in pursuance of righteousness.',
      'Nominations for leadership positions may be submitted by any member, and all nominees must agree to serve if elected.',
      'Elections will be conducted in a fair and transparent manner.',
      'Elections cannot be managed by any nominee.'
    ]
  },
  {
    slideNumber: 10,
    articleNumber: 'Article IV (4.3)',
    title: 'Term of Office',
    subtitle: 'Article 4.3 Tenure & Accountability',
    category: 'Leadership',
    contentLines: [
      'The office of the General Overseer is non-contestable except it is evident that the G.O is no longer practicing the word, is found guilty of mismanagement, or practices immorality of any form, shape, or manner.',
      'Leaders shall serve for a term of one year, with the possibility of re-election for additional terms.',
      'The Lead Coordinator may be re-elected multiple times as long as they are willing to continue in the role.'
    ]
  },
  {
    slideNumber: 11,
    articleNumber: 'Article IV (4.4)',
    title: 'Duties of Leaders',
    subtitle: 'Article 4.4 Oversight & Care',
    category: 'Leadership',
    contentLines: [
      'Leaders are responsible for:',
      '• Providing spiritual direction and oversight for the Prayer Group.',
      '• Organizing prayer meetings and special events.',
      '• Encouraging and equipping members for prayer and spiritual growth.',
      '• Managing any group finances, if applicable.',
      '• Ensuring that GPGM adheres to its purpose and statement of faith.'
    ]
  },
  {
    slideNumber: 12,
    articleNumber: 'Article V (5.1)',
    title: 'Meetings: Regular Gatherings',
    subtitle: 'Article 5.1 Regular Meetings',
    category: 'Meetings',
    contentLines: [
      'The Prayer Group shall meet regularly, at a time and place determined by the leadership.',
      'Meetings will include group prayer, Bible readings/study, worship, and time for sharing personal prayer requests and sometimes fasting and prayer.'
    ]
  },
  {
    slideNumber: 13,
    articleNumber: 'Article V (5.2)',
    title: 'Special Meetings, Vigils & Retreats',
    subtitle: 'Article 5.2 Special Convocations',
    category: 'Meetings',
    contentLines: [
      'Special meetings, such as prayer vigils, retreats, or outreach events, may be called by the leadership as needed.',
      'Members will be notified in advance of any special meetings.'
    ]
  },
  {
    slideNumber: 14,
    articleNumber: 'Article V (5.3)',
    title: 'Quorum & Holy Accountability',
    subtitle: 'Article 5.3 Quorum & Integrity of Meetings',
    category: 'Meetings',
    contentLines: [
      'A quorum for regular meetings shall consist of at least one-third of the current members.',
      'For elections or major decisions requiring approval, a quorum of two-thirds of the membership is required.',
      'In an event where a quorum cannot be reached, the circumstances must clearly be explained, and this must be done so in the spirit of the fear of GOD.',
      'Solemn Warning: Any meeting organised to manipulate members, the organiser(s) will not be spared by the wrath of GOD.'
    ]
  },
  {
    slideNumber: 15,
    articleNumber: 'Article VI (6.1)',
    title: 'Finances: Voluntary Funding',
    subtitle: 'Article 6.1 Funding Sources & Expenditure',
    category: 'Finances',
    contentLines: [
      'The GPGM may collect voluntary donations from its members to support its activities and mission.',
      'These funds may be used for the operational costs of the group, including venue rental, materials for meetings, outreach activities, and any other activities deemed appropriate by the leadership as led by the HOLY SPIRIT.',
      'Expenditures must be strictly accounted for and documented.'
    ]
  },
  {
    slideNumber: 16,
    articleNumber: 'Article VI (6.2)',
    title: 'Financial Oversight & Transparency',
    subtitle: 'Article 6.2 Stewardship & Periodic Reporting',
    category: 'Finances',
    contentLines: [
      'All funds collected shall be managed responsibly and transparently.',
      'A financial report shall be provided to the members on a weekly/monthly or an annual basis as the need may arise.'
    ]
  },
  {
    slideNumber: 17,
    articleNumber: 'Article VII (7.1)',
    title: 'Amendments: Amendment Process',
    subtitle: 'Article 7.1 Two-Thirds Vote',
    category: 'Governance',
    contentLines: [
      'These Articles of Association may be amended by a two-thirds vote of the members present at a regular meeting.',
      'Any proposed amendments must be submitted in writing to the leadership at least two weeks prior to the meeting at which they will be discussed.'
    ]
  },
  {
    slideNumber: 18,
    articleNumber: 'Article VII (7.2)',
    title: 'Notice of Amendments',
    subtitle: 'Article 7.2 Timely Notice',
    category: 'Governance',
    contentLines: [
      'All members must be notified in writing of proposed amendments at least one week before the meeting where the amendment will be considered.',
      'Amendments should not be rushed and not delayed either but carefully taken to glorify the name of GOD.'
    ]
  },
  {
    slideNumber: 19,
    articleNumber: 'Article VIII',
    title: 'Dissolution of the Ministry',
    subtitle: 'Article 8.1 Dissolution Protocol',
    category: 'Governance',
    contentLines: [
      'The Prayer Group may be dissolved if the membership, by a two-thirds vote, decides that it can no longer fulfill its purpose or has become inactive.',
      'Any remaining funds or property shall be donated to a religious organization or charity as determined by the members.'
    ]
  },
  {
    slideNumber: 20,
    articleNumber: 'Article IX (9.1)',
    title: 'Miscellaneous Provisions: Non-Discrimination',
    subtitle: 'Article 9.1 A House of Prayer for All People',
    category: 'Governance',
    contentLines: [
      'The Prayer Group shall operate in a manner that welcomes all people, regardless of race, gender, or background, and provides a safe environment for all members to grow spiritually as enshrined in the scriptures in Bible.'
    ]
  },
  {
    slideNumber: 21,
    articleNumber: 'Article IX (9.2)',
    title: 'Conflict Resolution Protocol',
    subtitle: 'Article 9.2 Prayer, Dialogue & Reconciliation',
    category: 'Governance',
    contentLines: [
      'Any conflicts or disputes within the group should be resolved through prayer, dialogue, and reconciliation.',
      'If necessary, external mediation may be sought from another trusted religious leader or organization.'
    ]
  },
  {
    slideNumber: 22,
    articleNumber: 'Signatures',
    title: 'Official Endorsements & Signatures',
    subtitle: 'Leadership Confirmation & Signatories',
    category: 'Governance',
    contentLines: [
      'Signed and ratified by the Leadership Council:',
      '• Lead Coordinator / General Overseer: Roland Tewure Fominyam',
      '• Assistant Coordinator: Celine Atarah Ekanem',
      '• Trustee: Agwa Brenda Chick'
    ]
  },
  {
    slideNumber: 23,
    articleNumber: 'Conclusion',
    title: 'Foundational Summary',
    subtitle: 'Article IX Summary',
    category: 'Governance',
    contentLines: [
      'This article of association serves as a foundational document for the governance and operations of the Grace Prayer Group Ministries, ensuring that the group operates in alignment with its purpose, values, and spiritual goals.'
    ]
  }
];
