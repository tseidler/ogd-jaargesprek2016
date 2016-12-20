import Background from 'backgrounds/background';
import SpriteBackground from 'backgrounds/spritebackground';

let separator = '                 ';

export const images = [
  {
    name: 'coconut_logo',
    URI: '/assets/coconut_logo.png'
  },
  {
    name: 'coconut_milk',
    URI: '/assets/coconut_milk.png'
  },
  {
    name: 'coconut_kennis',
    URI: '/assets/kennis_100.png'
  },
  {
    name: 'coconut_milk',
    URI: '/assets/coconut_milk2.png'
  },
  {
    name: 'ruby_logo',
    URI: '/assets/ruby_logo1.png'
  },
  {
    name: 'ruby_silver',
    URI: '/assets/ruby_cert_silver.png'
  },
  {
    name: 'ruby_gold',
    URI: '/assets/ruby_cert_gold.png'
  },
  {
    name: 'like',
    URI: '/assets/like.png'
  },
  {
    name: 'happy',
    URI: '/assets/smiley_happy.png'
  },
  {
    name: 'javascript_logo',
    URI: '/assets/javascript_logo.png'
  },
  {
    name: 'rails_logo',
    URI: '/assets/rails_logo.png'
  }
];

export const data = [
  {
    question: 'Hoe bevalt het bij OGD? Wat vind je goed gaan? Wat kan beter?',
    answer: 'The first time I stole so that I wouldn\'t starve, yes. I lost many assumptions about the simple nature of right and wrong. And when I traveled I learned the fear before a crime and the thrill of success. But I never became one of them.',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'url(/assets/background_ogd_bus.jpg)',
          backgroundSize: 'cover'
        }
      },
      fade_time: 1000
    }
  },
  {
    question: 'Wat zijn je huidige taken/verantwoordelijkheden? Hoe bevalt dit?',
    answer: 'But we\'ve met before. That was a long time ago, I was a kid at St. Swithin\'s, It used to be funded by the Wayne Foundation. It\'s an orphanage. My mum died when I was small, it was a car accident. I don\'t remember it. My dad got shot a couple of years later for a gambling debt. Oh I remember that one just fine. Not a lot of people know what it feels like to be angry in your bones. I mean they understand. The fosters parents. Everybody understands, for a while. Then they want the angry little kid to do something he knows he can\'t do, move on. After a while they stop understanding. They send the angry kid to a boy\'s home, I figured it out too late. Yeah I learned to hide the anger, and practice smiling in the mirror. It\'s like putting on a mask. So you showed up this one day, in a cool car, pretty girl on your arm. We were so excited! Bruce Wayne, a billionaire orphan? We used to make up stories about you man, legends and you know with the other kids, that\'s all it was, just stories, but right when I saw you, I knew who you really were. I\'d seen that look on your face before. It\'s the same one I taught myself. I don\'t why you took the fault for Dent\'s murder but I\'m still a believer in the Batman. Even if you\'re not...',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'url(/assets/background_coconut.png)',
          backgroundSize: 'cover'
        }
      },
      fade_time: 5000
    }
  },
  {
    question: 'Beschrijf wat je qua kennis hebt ontwikkeld het afgelopen jaar.',
    answer: 'placeholder',
    background: {
      type: SpriteBackground,
      options: {
        sprites: ['coconut_logo', 'ruby_logo', 'coconut_kennis', 'javascript_logo', 'rails_logo'],
        numSprites: 25
      }
    }
  },
  {
    question: 'Beschrijf hoe je in ervaring bent gegroeid het afgelopen jaar.',
    answer: 'placeholder',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'linear-gradient(to right, red, yellow)'
        }
      }
    }
  },
  {
    question: 'Beschrijf hoe je persoonlijk bent gegroeid in het afgelopen jaar.',
    answer: 'placeholder',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'linear-gradient(yellow, green)'
        }
      }
    }
  },
  {
    question: 'Beschrijf iets uit het afgelopen jaar waar je trots op bent.',
    answer: 'placeholder',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'url(/assets/background_postnl.jpg)',
          backgroundSize: 'cover'
        }
      }
    }
  },
  {
    question: 'Welke belemmeringen ervaar in je in je werk? En hoe kan OGD jou daarmee helpen?',
    answer: 'placeholder',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'url(/assets/background_belemmeringen.jpg)',
          backgroundSize: 'cover'
        }
      }
    }
  },
  {
    question: 'Waar liggen jouw ambities, wat vind je leuk, waar krijg je energie van?',
    answer: 'placeholder',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'url(/assets/background_ambities.png)',
          backgroundSize: 'cover'
        }
      }
    }
  },
  {
    question: 'Stel: Het is 2 jaar verder. Waar kijk je op terug?',
    answer: 'placeholder',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'url(/assets/background_huis.png)',
          backgroundSize: 'cover'
        }
      }
    }
  },
  {
    question: 'Wat wil je gaan doen op het gebied van examens en cursussen?',
    answer: 'placeholder',
    background: {
      type: SpriteBackground,
      options: {
        sprites: ['coconut_logo', 'ruby_logo', 'ruby_silver', 'ruby_gold', 'rails_logo'],
        numSprites: 15,
        styles: {
          background: 'none',
          backgroundColor: '#c3ffbb'
        }
      },
    }
  },
  {
    question: 'Welke ervaring wil je het komende jaar opdoen?',
    answer: 'placeholder',
    background: {
      type: SpriteBackground,
      options: {
        sprites: ['coconut_logo', 'ruby_logo', 'javascript_logo', 'coconut_kennis', 'rails_logo'],
        numSprites: 12,
        styles: {
          background: 'none',
          backgroundColor: '#bbd9ff'
        }
      },
    }
  },
  {
    question: 'Hoe wil je je persoonlijk gaan ontwikkelen?',
    answer: 'placeholder',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'url(/assets/background_achievement.jpg)',
          backgroundSize: 'cover'
        }
      }
    }
  },
  {
    question: 'Hoe ga je die ontwikkelingen verwezenlijken? Kunnen we je hierin ondersteunen?',
    answer: 'placeholder',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'url(/assets/background_support.jpg)',
          backgroundSize: 'cover'
        }
      }
    }
  },
  {
    question: 'Heb je verder nog vragen, opmerkingen of suggesties, vermeld deze dan hier.',
    answer: 'https://github.com/tseidler',
    background: {
      type: Background,
      options: {
        styles: {
          background: 'url(/assets/background_ogd_bus.jpg)',
          backgroundSize: 'cover'
        }
      }
    }
  }
];
