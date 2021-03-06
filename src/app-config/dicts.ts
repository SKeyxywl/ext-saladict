export function getALlDicts () {
  const allDicts = {
    bing: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1100',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 240,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: true,
        minor: false,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        tense: true,
        phsym: true,
        cdef: true,
        related: true,
        sentence: 4
      }
    },
    cambridge: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1110',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 265,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: false,
        minor: false,
      },
    },
    cobuild: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1000',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 300,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: false,
        minor: false,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        sentence: 4
      }
    },
    etymonline: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1000',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 265,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: false,
        minor: false,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        resultnum: 4,
        chart: true,
      }
    },
    eudic: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1100',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 240,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: true,
        minor: false,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        resultnum: 10
      }
    },
    google: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1111',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 320,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 999999999999999,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: true,
        minor: true,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        /** Keep linebreaks on PDF */
        pdfNewline: false,
        cnfirst: true,
        tl: 'default' as 'default' | 'zh-CN' | 'zh-TW' | 'en',
      },
      options_sel: {
        tl: ['default', 'zh-CN', 'zh-TW', 'en'],
      },
    },
    googledict: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1111',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 240,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: true,
        minor: true,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        enresult: true
      }
    },
    guoyu: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '0010',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 265,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: false,
        chs: true,
        minor: false,
      }
    },
    liangan: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '0010',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 265,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: false,
        chs: true,
        minor: false,
      }
    },
    longman: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1000',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 265,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: false,
        minor: false,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        wordfams: false,
        collocations: true,
        grammar: true,
        thesaurus: true,
        examples: true,
        bussinessFirst: true,
        related: true,
      }
    },
    macmillan: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1000',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 265,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: false,
        minor: false,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        related: true,
      }
    },
    oald: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1000',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 265,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: false,
        minor: false,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        related: true,
      },
    },
    sogou: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1111',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 320,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 999999999999999,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: true,
        minor: true,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        /** Keep linebreaks on PDF */
        pdfNewline: false,
        tl: 'default' as 'default' | 'zh-CHS' | 'zh-CHT' | 'en',
      },
      options_sel: {
        tl: ['default', 'zh-CHS', 'zh-CHT', 'en'],
      },
    },
    urban: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1000',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 180,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: false,
        minor: false,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        resultnum: 4
      }
    },
    vocabulary: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1000',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 180,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: false,
        minor: false,
      }
    },
    weblio: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '0001',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 265,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 20,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: true,
        minor: true,
      },
    },
    websterlearner: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1000',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 265,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: false,
        minor: false,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        defs: true,
        phrase: true,
        derived: true,
        arts: true,
        related: true,
      },
    },
    wikipedia: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1111',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 420,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 999999999999999,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: true,
        minor: true,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        lang: 'auto' as 'auto' | 'zh' | 'zh-cn' | 'zh-tw' | 'zh-hk' | 'en' | 'ja' | 'fr' | 'de',
      },
      options_sel: {
        lang: ['auto', 'zh', 'zh-cn', 'zh-tw', 'zh-hk', 'en', 'ja', 'fr', 'de'],
      },
    },
    youdao: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '1100',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 265,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 999999999999999,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: true,
        chs: true,
        minor: false,
      },
      /**
       * Optional dict custom options. Can only be boolean, number or string.
       * For string, add additional `options_sel` field to list out choices.
       */
      options: {
        basic: true,
        collins: true,
        discrimination: true,
        sentence: true,
        translation: true,
        related: true,
      }
    },
    zdic: {
      /**
       * Supported language: en, zh-CN, zh-TW, ja
       * `1` for supported
       */
      lang: '0100',
      /**
       * If set to true, the dict start searching automatically.
       * Otherwise it'll only start seaching when user clicks the unfold button.
       * Default MUST be true and let user decide.
       */
      defaultUnfold: true,
      /**
       * This is the default height when the dict first renders the result.
       * If the content height is greater than the preferred height,
       * the preferred height is used and a mask with a view-more button is shown.
       * Otherwise the content height is used.
       */
      preferredHeight: 400,
      /** Word count to start searching */
      selectionWC: {
        min: 1,
        max: 5,
      },
      /** Only start searching if the selection contains the language. */
      selectionLang: {
        eng: false,
        chs: true,
        minor: false,
      }
    },
  }

  // Just for type check. Keys in allDicts are useful so no actual assertion
  // tslint:disable-next-line:no-unused-expression
  allDicts as {
    [id: string]: {
      lang: string
      defaultUnfold: boolean
      selectionWC: {
        min: number,
        max: number,
      },
      preferredHeight: number
      selectionLang: {
        eng: boolean
        chs: boolean
        minor: boolean
      }
      options?: {
        [option: string]: number | boolean | string
      }
      options_sel?: {
        [choice: string]: string[]
      }
    }
  }

  return allDicts
}
