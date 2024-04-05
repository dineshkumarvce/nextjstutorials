import styles from './users.module.css';

const page = () => {
    const data = [
        {
            "profile": {
                "name": "Lelah Nichols",
                "location": "Troy, MI",
                "interests": ["music", "reading", "badminton", "cricket"],
                "image": "https://st5.depositphotos.com/16122460/67533/i/380/depositphotos_675338960-stock-photo-portrait-happy-woman-office-pretty.jpg",
                "bio": "Hi, I'm Lelah! I'm passionate about music and enjoy exploring different genres. In my free time, you can find me playing the guitar or attending live concerts.",
                "socialMedia": {
                    "twitter": "https://twitter.com/lelah_nichols",
                    "instagram": "https://www.instagram.com/lelah.nichols/",
                    "facebook": "https://www.facebook.com/lelah.nichols"
                },
                "contact": {
                    "email": "lelah.nichols@example.com",
                    "phone": "+1234567890"
                }
            }
        },
        {
            "profile": {
                "name": "John Doe",
                "location": "New York, NY",
                "interests": ["photography", "travel", "food"],
                "image": "https://st2.depositphotos.com/4082359/5888/i/380/depositphotos_58885593-stock-photo-successful-business-woman.jpg",
                "bio": "Hey there! I'm John, a photography enthusiast who loves to capture the beauty of nature and explore new destinations. Foodie at heart.",
                "socialMedia": {
                    "twitter": "https://twitter.com/johndoe",
                    "instagram": "https://www.instagram.com/johndoe/",
                    "facebook": "https://www.facebook.com/johndoe"
                },
                "contact": {
                    "email": "john.doe@example.com",
                    "phone": "+1987654321"
                }
            }
        },
        {
            "profile": {
                "name": "Emily Johnson",
                "location": "Los Angeles, CA",
                "interests": ["art", "painting", "reading", "yoga"],
                "image": "https://st3.depositphotos.com/12985848/16098/i/380/depositphotos_160982434-stock-photo-smiling-businesswoman-in-eyeglasses.jpg",
                "bio": "Hi! I'm Emily. I'm an artist who finds inspiration in nature and everyday life. When I'm not painting, you can find me lost in a good book or practicing yoga.",
                "socialMedia": {
                    "twitter": "https://twitter.com/emilyartist",
                    "instagram": "https://www.instagram.com/emily_artist/",
                    "facebook": "https://www.facebook.com/emilyartist"
                },
                "contact": {
                    "email": "emily.johnson@example.com",
                    "phone": "+1650432198"
                }
            }
        },
        {
            "profile": {
                "name": "David Smith",
                "location": "Chicago, IL",
                "interests": ["sports", "cooking", "gardening"],
                "image": "https://st.depositphotos.com/1594308/1604/i/380/depositphotos_16040295-stock-photo-charming-businesswoman.jpg",
                "bio": "Hey, I'm David! I'm passionate about sports, especially basketball and football. In my free time, I enjoy experimenting with new recipes and tending to my garden.",
                "socialMedia": {
                    "twitter": "https://twitter.com/david_sportsfan",
                    "instagram": "https://www.instagram.com/david_sportsfan/",
                    "facebook": "https://www.facebook.com/davidsportsfan"
                },
                "contact": {
                    "email": "david.smith@example.com",
                    "phone": "+1770321546"
                }
            }
        },
        {
            "profile": {
                "name": "Lelah Nichols",
                "location": "Troy, MI",
                "interests": ["music", "reading", "badminton", "cricket"],
                "image": "https://st5.depositphotos.com/16122460/67533/i/380/depositphotos_675338960-stock-photo-portrait-happy-woman-office-pretty.jpg",
                "bio": "Hi, I'm Lelah! I'm passionate about music and enjoy exploring different genres. In my free time, you can find me playing the guitar or attending live concerts.",
                "socialMedia": {
                    "twitter": "https://twitter.com/lelah_nichols",
                    "instagram": "https://www.instagram.com/lelah.nichols/",
                    "facebook": "https://www.facebook.com/lelah.nichols"
                },
                "contact": {
                    "email": "lelah.nichols@example.com",
                    "phone": "+1234567890"
                }
            }
        },
        {
            "profile": {
                "name": "John Doe",
                "location": "New York, NY",
                "interests": ["photography", "travel", "food"],
                "image": "https://st2.depositphotos.com/4082359/5888/i/380/depositphotos_58885593-stock-photo-successful-business-woman.jpg",
                "bio": "Hey there! I'm John, a photography enthusiast who loves to capture the beauty of nature and explore new destinations. Foodie at heart.",
                "socialMedia": {
                    "twitter": "https://twitter.com/johndoe",
                    "instagram": "https://www.instagram.com/johndoe/",
                    "facebook": "https://www.facebook.com/johndoe"
                },
                "contact": {
                    "email": "john.doe@example.com",
                    "phone": "+1987654321"
                }
            }
        },
        {
            "profile": {
                "name": "Emily Johnson",
                "location": "Los Angeles, CA",
                "interests": ["art", "painting", "reading", "yoga"],
                "image": "https://st3.depositphotos.com/12985848/16098/i/380/depositphotos_160982434-stock-photo-smiling-businesswoman-in-eyeglasses.jpg",
                "bio": "Hi! I'm Emily. I'm an artist who finds inspiration in nature and everyday life. When I'm not painting, you can find me lost in a good book or practicing yoga.",
                "socialMedia": {
                    "twitter": "https://twitter.com/emilyartist",
                    "instagram": "https://www.instagram.com/emily_artist/",
                    "facebook": "https://www.facebook.com/emilyartist"
                },
                "contact": {
                    "email": "emily.johnson@example.com",
                    "phone": "+1650432198"
                }
            }
        },
        {
            "profile": {
                "name": "David Smith",
                "location": "Chicago, IL",
                "interests": ["sports", "cooking", "gardening"],
                "image": "https://st.depositphotos.com/1594308/1604/i/380/depositphotos_16040295-stock-photo-charming-businesswoman.jpg",
                "bio": "Hey, I'm David! I'm passionate about sports, especially basketball and football. In my free time, I enjoy experimenting with new recipes and tending to my garden.",
                "socialMedia": {
                    "twitter": "https://twitter.com/david_sportsfan",
                    "instagram": "https://www.instagram.com/david_sportsfan/",
                    "facebook": "https://www.facebook.com/davidsportsfan"
                },
                "contact": {
                    "email": "david.smith@example.com",
                    "phone": "+1770321546"
                }
            }
        },
        {
            "profile": {
                "name": "Lelah Nichols",
                "location": "Troy, MI",
                "interests": ["music", "reading", "badminton", "cricket"],
                "image": "https://st5.depositphotos.com/16122460/67533/i/380/depositphotos_675338960-stock-photo-portrait-happy-woman-office-pretty.jpg",
                "bio": "Hi, I'm Lelah! I'm passionate about music and enjoy exploring different genres. In my free time, you can find me playing the guitar or attending live concerts.",
                "socialMedia": {
                    "twitter": "https://twitter.com/lelah_nichols",
                    "instagram": "https://www.instagram.com/lelah.nichols/",
                    "facebook": "https://www.facebook.com/lelah.nichols"
                },
                "contact": {
                    "email": "lelah.nichols@example.com",
                    "phone": "+1234567890"
                }
            }
        },
        {
            "profile": {
                "name": "John Doe",
                "location": "New York, NY",
                "interests": ["photography", "travel", "food"],
                "image": "https://st2.depositphotos.com/4082359/5888/i/380/depositphotos_58885593-stock-photo-successful-business-woman.jpg",
                "bio": "Hey there! I'm John, a photography enthusiast who loves to capture the beauty of nature and explore new destinations. Foodie at heart.",
                "socialMedia": {
                    "twitter": "https://twitter.com/johndoe",
                    "instagram": "https://www.instagram.com/johndoe/",
                    "facebook": "https://www.facebook.com/johndoe"
                },
                "contact": {
                    "email": "john.doe@example.com",
                    "phone": "+1987654321"
                }
            }
        },
        {
            "profile": {
                "name": "Emily Johnson",
                "location": "Los Angeles, CA",
                "interests": ["art", "painting", "reading", "yoga"],
                "image": "https://st3.depositphotos.com/12985848/16098/i/380/depositphotos_160982434-stock-photo-smiling-businesswoman-in-eyeglasses.jpg",
                "bio": "Hi! I'm Emily. I'm an artist who finds inspiration in nature and everyday life. When I'm not painting, you can find me lost in a good book or practicing yoga.",
                "socialMedia": {
                    "twitter": "https://twitter.com/emilyartist",
                    "instagram": "https://www.instagram.com/emily_artist/",
                    "facebook": "https://www.facebook.com/emilyartist"
                },
                "contact": {
                    "email": "emily.johnson@example.com",
                    "phone": "+1650432198"
                }
            }
        },
        {
            "profile": {
                "name": "David Smith",
                "location": "Chicago, IL",
                "interests": ["sports", "cooking", "gardening"],
                "image": "https://st.depositphotos.com/1594308/1604/i/380/depositphotos_16040295-stock-photo-charming-businesswoman.jpg",
                "bio": "Hey, I'm David! I'm passionate about sports, especially basketball and football. In my free time, I enjoy experimenting with new recipes and tending to my garden.",
                "socialMedia": {
                    "twitter": "https://twitter.com/david_sportsfan",
                    "instagram": "https://www.instagram.com/david_sportsfan/",
                    "facebook": "https://www.facebook.com/davidsportsfan"
                },
                "contact": {
                    "email": "david.smith@example.com",
                    "phone": "+1770321546"
                }
            }
        },{
            "profile": {
                "name": "John Doe",
                "location": "New York, NY",
                "interests": ["photography", "travel", "food"],
                "image": "https://st2.depositphotos.com/4082359/5888/i/380/depositphotos_58885593-stock-photo-successful-business-woman.jpg",
                "bio": "Hey there! I'm John, a photography enthusiast who loves to capture the beauty of nature and explore new destinations. Foodie at heart.",
                "socialMedia": {
                    "twitter": "https://twitter.com/johndoe",
                    "instagram": "https://www.instagram.com/johndoe/",
                    "facebook": "https://www.facebook.com/johndoe"
                },
                "contact": {
                    "email": "john.doe@example.com",
                    "phone": "+1987654321"
                }
            }
        },
        {
            "profile": {
                "name": "Emily Johnson",
                "location": "Los Angeles, CA",
                "interests": ["art", "painting", "reading", "yoga"],
                "image": "https://st3.depositphotos.com/12985848/16098/i/380/depositphotos_160982434-stock-photo-smiling-businesswoman-in-eyeglasses.jpg",
                "bio": "Hi! I'm Emily. I'm an artist who finds inspiration in nature and everyday life. When I'm not painting, you can find me lost in a good book or practicing yoga.",
                "socialMedia": {
                    "twitter": "https://twitter.com/emilyartist",
                    "instagram": "https://www.instagram.com/emily_artist/",
                    "facebook": "https://www.facebook.com/emilyartist"
                },
                "contact": {
                    "email": "emily.johnson@example.com",
                    "phone": "+1650432198"
                }
            }
        },
        {
            "profile": {
                "name": "David Smith",
                "location": "Chicago, IL",
                "interests": ["sports", "cooking", "gardening"],
                "image": "https://st.depositphotos.com/1594308/1604/i/380/depositphotos_16040295-stock-photo-charming-businesswoman.jpg",
                "bio": "Hey, I'm David! I'm passionate about sports, especially basketball and football. In my free time, I enjoy experimenting with new recipes and tending to my garden.",
                "socialMedia": {
                    "twitter": "https://twitter.com/david_sportsfan",
                    "instagram": "https://www.instagram.com/david_sportsfan/",
                    "facebook": "https://www.facebook.com/davidsportsfan"
                },
                "contact": {
                    "email": "david.smith@example.com",
                    "phone": "+1770321546"
                }
            }
        },
        {
            "profile": {
                "name": "Lelah Nichols",
                "location": "Troy, MI",
                "interests": ["music", "reading", "badminton", "cricket"],
                "image": "https://st5.depositphotos.com/16122460/67533/i/380/depositphotos_675338960-stock-photo-portrait-happy-woman-office-pretty.jpg",
                "bio": "Hi, I'm Lelah! I'm passionate about music and enjoy exploring different genres. In my free time, you can find me playing the guitar or attending live concerts.",
                "socialMedia": {
                    "twitter": "https://twitter.com/lelah_nichols",
                    "instagram": "https://www.instagram.com/lelah.nichols/",
                    "facebook": "https://www.facebook.com/lelah.nichols"
                },
                "contact": {
                    "email": "lelah.nichols@example.com",
                    "phone": "+1234567890"
                }
            }
        },
        {
            "profile": {
                "name": "John Doe",
                "location": "New York, NY",
                "interests": ["photography", "travel", "food"],
                "image": "https://st2.depositphotos.com/4082359/5888/i/380/depositphotos_58885593-stock-photo-successful-business-woman.jpg",
                "bio": "Hey there! I'm John, a photography enthusiast who loves to capture the beauty of nature and explore new destinations. Foodie at heart.",
                "socialMedia": {
                    "twitter": "https://twitter.com/johndoe",
                    "instagram": "https://www.instagram.com/johndoe/",
                    "facebook": "https://www.facebook.com/johndoe"
                },
                "contact": {
                    "email": "john.doe@example.com",
                    "phone": "+1987654321"
                }
            }
        },
        {
            "profile": {
                "name": "Emily Johnson",
                "location": "Los Angeles, CA",
                "interests": ["art", "painting", "reading", "yoga"],
                "image": "https://st3.depositphotos.com/12985848/16098/i/380/depositphotos_160982434-stock-photo-smiling-businesswoman-in-eyeglasses.jpg",
                "bio": "Hi! I'm Emily. I'm an artist who finds inspiration in nature and everyday life. When I'm not painting, you can find me lost in a good book or practicing yoga.",
                "socialMedia": {
                    "twitter": "https://twitter.com/emilyartist",
                    "instagram": "https://www.instagram.com/emily_artist/",
                    "facebook": "https://www.facebook.com/emilyartist"
                },
                "contact": {
                    "email": "emily.johnson@example.com",
                    "phone": "+1650432198"
                }
            }
        },
        {
            "profile": {
                "name": "David Smith",
                "location": "Chicago, IL",
                "interests": ["sports", "cooking", "gardening"],
                "image": "https://st.depositphotos.com/1594308/1604/i/380/depositphotos_16040295-stock-photo-charming-businesswoman.jpg",
                "bio": "Hey, I'm David! I'm passionate about sports, especially basketball and football. In my free time, I enjoy experimenting with new recipes and tending to my garden.",
                "socialMedia": {
                    "twitter": "https://twitter.com/david_sportsfan",
                    "instagram": "https://www.instagram.com/david_sportsfan/",
                    "facebook": "https://www.facebook.com/davidsportsfan"
                },
                "contact": {
                    "email": "david.smith@example.com",
                    "phone": "+1770321546"
                }
            }
        },
        {
            "profile": {
                "name": "Lelah Nichols",
                "location": "Troy, MI",
                "interests": ["music", "reading", "badminton", "cricket"],
                "image": "https://st5.depositphotos.com/16122460/67533/i/380/depositphotos_675338960-stock-photo-portrait-happy-woman-office-pretty.jpg",
                "bio": "Hi, I'm Lelah! I'm passionate about music and enjoy exploring different genres. In my free time, you can find me playing the guitar or attending live concerts.",
                "socialMedia": {
                    "twitter": "https://twitter.com/lelah_nichols",
                    "instagram": "https://www.instagram.com/lelah.nichols/",
                    "facebook": "https://www.facebook.com/lelah.nichols"
                },
                "contact": {
                    "email": "lelah.nichols@example.com",
                    "phone": "+1234567890"
                }
            }
        },
        {
            "profile": {
                "name": "John Doe",
                "location": "New York, NY",
                "interests": ["photography", "travel", "food"],
                "image": "https://st2.depositphotos.com/4082359/5888/i/380/depositphotos_58885593-stock-photo-successful-business-woman.jpg",
                "bio": "Hey there! I'm John, a photography enthusiast who loves to capture the beauty of nature and explore new destinations. Foodie at heart.",
                "socialMedia": {
                    "twitter": "https://twitter.com/johndoe",
                    "instagram": "https://www.instagram.com/johndoe/",
                    "facebook": "https://www.facebook.com/johndoe"
                },
                "contact": {
                    "email": "john.doe@example.com",
                    "phone": "+1987654321"
                }
            }
        },
        {
            "profile": {
                "name": "Emily Johnson",
                "location": "Los Angeles, CA",
                "interests": ["art", "painting", "reading", "yoga"],
                "image": "https://st3.depositphotos.com/12985848/16098/i/380/depositphotos_160982434-stock-photo-smiling-businesswoman-in-eyeglasses.jpg",
                "bio": "Hi! I'm Emily. I'm an artist who finds inspiration in nature and everyday life. When I'm not painting, you can find me lost in a good book or practicing yoga.",
                "socialMedia": {
                    "twitter": "https://twitter.com/emilyartist",
                    "instagram": "https://www.instagram.com/emily_artist/",
                    "facebook": "https://www.facebook.com/emilyartist"
                },
                "contact": {
                    "email": "emily.johnson@example.com",
                    "phone": "+1650432198"
                }
            }
        },
        {
            "profile": {
                "name": "David Smith",
                "location": "Chicago, IL",
                "interests": ["sports", "cooking", "gardening"],
                "image": "https://st.depositphotos.com/1594308/1604/i/380/depositphotos_16040295-stock-photo-charming-businesswoman.jpg",
                "bio": "Hey, I'm David! I'm passionate about sports, especially basketball and football. In my free time, I enjoy experimenting with new recipes and tending to my garden.",
                "socialMedia": {
                    "twitter": "https://twitter.com/david_sportsfan",
                    "instagram": "https://www.instagram.com/david_sportsfan/",
                    "facebook": "https://www.facebook.com/davidsportsfan"
                },
                "contact": {
                    "email": "david.smith@example.com",
                    "phone": "+1770321546"
                }
            }
        },
        {
            "profile": {
                "name": "John Doe",
                "location": "New York, NY",
                "interests": ["photography", "travel", "food"],
                "image": "https://st2.depositphotos.com/4082359/5888/i/380/depositphotos_58885593-stock-photo-successful-business-woman.jpg",
                "bio": "Hey there! I'm John, a photography enthusiast who loves to capture the beauty of nature and explore new destinations. Foodie at heart.",
                "socialMedia": {
                    "twitter": "https://twitter.com/johndoe",
                    "instagram": "https://www.instagram.com/johndoe/",
                    "facebook": "https://www.facebook.com/johndoe"
                },
                "contact": {
                    "email": "john.doe@example.com",
                    "phone": "+1987654321"
                }
            }
        },
        {
            "profile": {
                "name": "Emily Johnson",
                "location": "Los Angeles, CA",
                "interests": ["art", "painting", "reading", "yoga"],
                "image": "https://st3.depositphotos.com/12985848/16098/i/380/depositphotos_160982434-stock-photo-smiling-businesswoman-in-eyeglasses.jpg",
                "bio": "Hi! I'm Emily. I'm an artist who finds inspiration in nature and everyday life. When I'm not painting, you can find me lost in a good book or practicing yoga.",
                "socialMedia": {
                    "twitter": "https://twitter.com/emilyartist",
                    "instagram": "https://www.instagram.com/emily_artist/",
                    "facebook": "https://www.facebook.com/emilyartist"
                },
                "contact": {
                    "email": "emily.johnson@example.com",
                    "phone": "+1650432198"
                }
            }
        },
        {
            "profile": {
                "name": "David Smith",
                "location": "Chicago, IL",
                "interests": ["sports", "cooking", "gardening"],
                "image": "https://st.depositphotos.com/1594308/1604/i/380/depositphotos_16040295-stock-photo-charming-businesswoman.jpg",
                "bio": "Hey, I'm David! I'm passionate about sports, especially basketball and football. In my free time, I enjoy experimenting with new recipes and tending to my garden.",
                "socialMedia": {
                    "twitter": "https://twitter.com/david_sportsfan",
                    "instagram": "https://www.instagram.com/david_sportsfan/",
                    "facebook": "https://www.facebook.com/davidsportsfan"
                },
                "contact": {
                    "email": "david.smith@example.com",
                    "phone": "+1770321546"
                }
            }
        },
        {
            "profile": {
                "name": "Lelah Nichols",
                "location": "Troy, MI",
                "interests": ["music", "reading", "badminton", "cricket"],
                "image": "https://st5.depositphotos.com/16122460/67533/i/380/depositphotos_675338960-stock-photo-portrait-happy-woman-office-pretty.jpg",
                "bio": "Hi, I'm Lelah! I'm passionate about music and enjoy exploring different genres. In my free time, you can find me playing the guitar or attending live concerts.",
                "socialMedia": {
                    "twitter": "https://twitter.com/lelah_nichols",
                    "instagram": "https://www.instagram.com/lelah.nichols/",
                    "facebook": "https://www.facebook.com/lelah.nichols"
                },
                "contact": {
                    "email": "lelah.nichols@example.com",
                    "phone": "+1234567890"
                }
            }
        },
        {
            "profile": {
                "name": "John Doe",
                "location": "New York, NY",
                "interests": ["photography", "travel", "food"],
                "image": "https://st2.depositphotos.com/4082359/5888/i/380/depositphotos_58885593-stock-photo-successful-business-woman.jpg",
                "bio": "Hey there! I'm John, a photography enthusiast who loves to capture the beauty of nature and explore new destinations. Foodie at heart.",
                "socialMedia": {
                    "twitter": "https://twitter.com/johndoe",
                    "instagram": "https://www.instagram.com/johndoe/",
                    "facebook": "https://www.facebook.com/johndoe"
                },
                "contact": {
                    "email": "john.doe@example.com",
                    "phone": "+1987654321"
                }
            }
        },
        {
            "profile": {
                "name": "Emily Johnson",
                "location": "Los Angeles, CA",
                "interests": ["art", "painting", "reading", "yoga"],
                "image": "https://st3.depositphotos.com/12985848/16098/i/380/depositphotos_160982434-stock-photo-smiling-businesswoman-in-eyeglasses.jpg",
                "bio": "Hi! I'm Emily. I'm an artist who finds inspiration in nature and everyday life. When I'm not painting, you can find me lost in a good book or practicing yoga.",
                "socialMedia": {
                    "twitter": "https://twitter.com/emilyartist",
                    "instagram": "https://www.instagram.com/emily_artist/",
                    "facebook": "https://www.facebook.com/emilyartist"
                },
                "contact": {
                    "email": "emily.johnson@example.com",
                    "phone": "+1650432198"
                }
            }
        },
        {
            "profile": {
                "name": "David Smith",
                "location": "Chicago, IL",
                "interests": ["sports", "cooking", "gardening"],
                "image": "https://st.depositphotos.com/1594308/1604/i/380/depositphotos_16040295-stock-photo-charming-businesswoman.jpg",
                "bio": "Hey, I'm David! I'm passionate about sports, especially basketball and football. In my free time, I enjoy experimenting with new recipes and tending to my garden.",
                "socialMedia": {
                    "twitter": "https://twitter.com/david_sportsfan",
                    "instagram": "https://www.instagram.com/david_sportsfan/",
                    "facebook": "https://www.facebook.com/davidsportsfan"
                },
                "contact": {
                    "email": "david.smith@example.com",
                    "phone": "+1770321546"
                }
            }
        },
        {
            "profile": {
                "name": "Lelah Nichols",
                "location": "Troy, MI",
                "interests": ["music", "reading", "badminton", "cricket"],
                "image": "https://st5.depositphotos.com/16122460/67533/i/380/depositphotos_675338960-stock-photo-portrait-happy-woman-office-pretty.jpg",
                "bio": "Hi, I'm Lelah! I'm passionate about music and enjoy exploring different genres. In my free time, you can find me playing the guitar or attending live concerts.",
                "socialMedia": {
                    "twitter": "https://twitter.com/lelah_nichols",
                    "instagram": "https://www.instagram.com/lelah.nichols/",
                    "facebook": "https://www.facebook.com/lelah.nichols"
                },
                "contact": {
                    "email": "lelah.nichols@example.com",
                    "phone": "+1234567890"
                }
            }
        },
        {
            "profile": {
                "name": "John Doe",
                "location": "New York, NY",
                "interests": ["photography", "travel", "food"],
                "image": "https://st2.depositphotos.com/4082359/5888/i/380/depositphotos_58885593-stock-photo-successful-business-woman.jpg",
                "bio": "Hey there! I'm John, a photography enthusiast who loves to capture the beauty of nature and explore new destinations. Foodie at heart.",
                "socialMedia": {
                    "twitter": "https://twitter.com/johndoe",
                    "instagram": "https://www.instagram.com/johndoe/",
                    "facebook": "https://www.facebook.com/johndoe"
                },
                "contact": {
                    "email": "john.doe@example.com",
                    "phone": "+1987654321"
                }
            }
        },
        {
            "profile": {
                "name": "Emily Johnson",
                "location": "Los Angeles, CA",
                "interests": ["art", "painting", "reading", "yoga"],
                "image": "https://st3.depositphotos.com/12985848/16098/i/380/depositphotos_160982434-stock-photo-smiling-businesswoman-in-eyeglasses.jpg",
                "bio": "Hi! I'm Emily. I'm an artist who finds inspiration in nature and everyday life. When I'm not painting, you can find me lost in a good book or practicing yoga.",
                "socialMedia": {
                    "twitter": "https://twitter.com/emilyartist",
                    "instagram": "https://www.instagram.com/emily_artist/",
                    "facebook": "https://www.facebook.com/emilyartist"
                },
                "contact": {
                    "email": "emily.johnson@example.com",
                    "phone": "+1650432198"
                }
            }
        },
        {
            "profile": {
                "name": "David Smith",
                "location": "Chicago, IL",
                "interests": ["sports", "cooking", "gardening"],
                "image": "https://st.depositphotos.com/1594308/1604/i/380/depositphotos_16040295-stock-photo-charming-businesswoman.jpg",
                "bio": "Hey, I'm David! I'm passionate about sports, especially basketball and football. In my free time, I enjoy experimenting with new recipes and tending to my garden.",
                "socialMedia": {
                    "twitter": "https://twitter.com/david_sportsfan",
                    "instagram": "https://www.instagram.com/david_sportsfan/",
                    "facebook": "https://www.facebook.com/davidsportsfan"
                },
                "contact": {
                    "email": "david.smith@example.com",
                    "phone": "+1770321546"
                }
            }
        }
    ]


    return (
        <div className={styles.userContainer}>
            <div className={styles.pageTitle}>Users</div>
            <header className={styles.headerContainer}>
                <section className={styles.searchBar}>
                    <input type="search" name="user" id="user" placeholder='search users' className={styles.searchInput} />
                </section>
                <menu>
                    <ul>
                        <li>Reputation</li>
                        <li>New users</li>
                        <li>Voters</li>
                        <li>Editors</li>
                        <li>Moderators</li>
                    </ul>
                </menu>
            </header>
            <article className={styles.cardContainer}>
                {data.map((el) => (
                    <div className={styles.card}>
                        <div className={styles.cardLeft}>
                            <div className={styles.profileImage}>
                                <img src={el.profile.image} alt='image' />
                            </div>
                        </div>
                        <div className={styles.cardRight}>
                            <div className={styles.userName}>{el.profile.name}</div>
                            <div className={styles.loaction}>{el.profile.location}</div>
                            <div className={styles.intrestList}>
                                {el.profile.interests.map((interest) => (<span className={styles.intrest}>{interest}</span>))}
                            </div>
                        </div>
                    </div>
                ))}

            </article>
        </div>
    )
}

export default page