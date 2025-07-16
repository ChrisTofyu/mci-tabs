import React from 'react';
import Article, { ArticleType } from './Article';
import { StoryObj, Meta, Decorator } from '@storybook/react';
import Theme from '@radix-styles/atoms/Theme';

const Decorators: Decorator = Story => (
  <div>
    <Theme>
      <Story />
    </Theme>
  </div>
);

const meta = {
  title: 'Library/Organisms/Article',
  component: Article,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    article: {
      title: {
        control: 'text',
        description: 'Title of the article',
      },
      subHead: {
        control: 'text',
        description: 'Subheading of the article',
      },
      contentBody: {
        control: 'object',
        description: 'Content body of the article in HTML format',
      },
      tags: {
        control: 'object',
        description: 'Tags associated with the article',
      },
      DisplayDate: {
        control: 'date',
        description: 'Display date of the article',
      },
      status: {
        control: 'text',
        description: 'Approval status of the article',
      },
      createdByAuthorDetails: {
        control: 'object',
        description: 'Details of the author who created the article',
      },
    },
    asset: {
      prefix: {
        control: 'text',
        description: 'Prefix for the asset URL',
      },
    },
  },
  args: {
    asset: {
      prefix: 'https://dev-aem.worldvision.ca',
    },
  },
  decorators: Decorators,
  excludeStories: ['articleStroyData'],
} satisfies Meta<typeof Article>;

export default meta;

type Story = StoryObj<typeof meta>;

export const articleStroyData: ArticleType = {
  _path:
    '/content/dam/wvc/EN/multi-context-content/climate-change/fy-24-q-3-participant-story-cc-som-hc-udugow',
  title: 'Meet Immaculée, Female Mechanic-in-Training',
  tags: [],
  subHead:
    'This teenage rockstar is jumping into a male-dominated trade with no regrets—watch her explain why. ',
  contentBody: [
    {
      html: `
        <div class="OutlineElement Ltr SCXW122441049 BCX0">
          <p class="Paragraph SCXW122441049 BCX0"><span class="TextRun SCXW122441049 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW122441049 BCX0">Immaculée, 18, leans against a blue jeep, one of many vehicles lined up for repair at the </span><span class="NormalTextRun SpellingErrorV2Themed SCXW122441049 BCX0">So</span><span class="NormalTextRun SpellingErrorV2Themed SCXW122441049 BCX0">t</span><span class="NormalTextRun SpellingErrorV2Themed SCXW122441049 BCX0">ra</span><span class="NormalTextRun SpellingErrorV2Themed SCXW122441049 BCX0">k</span><span class="NormalTextRun SpellingErrorV2Themed SCXW122441049 BCX0">i</span><span class="NormalTextRun SCXW122441049 BCX0"> garage in Goma, Democratic Republic of </span><span class="NormalTextRun ContextualSpellingAndGrammarErrorV2Themed SCXW122441049 BCX0">the Congo</span><span class="NormalTextRun SCXW122441049 BCX0">. </span><span class="NormalTextRun SCXW122441049 BCX0">She’s</span><span class="NormalTextRun SCXW122441049 BCX0"> in training here, well on her way to becoming a mechanic, and </span><span class="NormalTextRun SCXW122441049 BCX0">she’s</span><span class="NormalTextRun SCXW122441049 BCX0"> the only girl in sight.</span></span> <span class="EOP SCXW122441049 BCX0" data-ccp-props="{}">&nbsp;</span></p> 
        </div>
        <div class="OutlineElement Ltr SCXW122441049 BCX0">
          <p class="Paragraph SCXW122441049 BCX0"><span class="TextRun SCXW122441049 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW122441049 BCX0">Longstanding conflict in the DRC has created a displacement crisis with massive implications for the country’s young people as they ponder their careers and livelihoods. How do you </span><span class="NormalTextRun AdvancedProofingIssueV2Themed SCXW122441049 BCX0">plan for the future</span><span class="NormalTextRun SCXW122441049 BCX0"> when the present is so unsure? Through Raw </span><span class="NormalTextRun ContextualSpellingAndGrammarErrorV2Themed SCXW122441049 BCX0">Hope,*</span><span class="NormalTextRun SCXW122441049 BCX0"> World Vision has </span><span class="NormalTextRun SCXW122441049 BCX0">established</span><span class="NormalTextRun SCXW122441049 BCX0"> a social reintegration program in eastern DRC, equipping 90 displaced young people with skills in small business and trades.&nbsp;</span></span><span class="EOP SCXW122441049 BCX0" data-ccp-props="{}">&nbsp;</span></p>
        </div>
        <ul><li><p class="Paragraph SCXW240355080 BCX0"><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">A</span></span></p></li><li><p class="Paragraph SCXW240355080 BCX0"><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">B</span></span></p></li></ul>
        <ol><li><p class="Paragraph SCXW240355080 BCX0"><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">1</span></span></p></li><li><p class="Paragraph SCXW240355080 BCX0"><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">2</span></span></p></li></ol>
      `,
    },
    {
      html: `
        <div class="OutlineElement Ltr SCXW240355080 BCX0">
          <p class="Paragraph SCXW240355080 BCX0"><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">Some of Immaculée’s peers have been internally displaced for a year, but most have been away from their homes for two years or more. </span></span><a class="Hyperlink SCXW240355080 BCX0" href="https://www.unocha.org/publications/report/democratic-republic-congo/democratic-republic-congo-internally-displaced-persons-and-returnees-april-2024#:~:text=Since%20the%20beginning%20of%202024,to%20armed%20attacks%20and%20clashes." target="_blank" rel="noreferrer noopener"><span class="TextRun Underlined SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="none"><span class="NormalTextRun SCXW240355080 BCX0" data-ccp-charstyle="Hyperlink">According to OCHA</span></span></a><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">, since the start of 2024, an </span><span class="NormalTextRun SCXW240355080 BCX0">additional</span><span class="NormalTextRun SCXW240355080 BCX0"> 940,000 people have become newly displaced in the DRC, bringing the total to approximately 7.3 million. Among the displaced, </span></span><span class="TextRun SCXW240355080 BCX0" lang="EN-CA" xml:lang="EN-CA" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">51 per cent are women, and 80 per cent of the displacements are because of armed attacks and clashes.</span></span><span class="EOP SCXW240355080 BCX0" data-ccp-props="{}">&nbsp;</span><span class="EOP SCXW240355080 BCX0" data-ccp-props="{}">&nbsp;</span></p>
        </div>
        <div class="OutlineElement Ltr SCXW240355080 BCX0">
          <p class="Paragraph SCXW240355080 BCX0"><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0"></span></span></p>
          <p class="Paragraph SCXW240355080 BCX0"><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">It was a night spent in fear of such violence that led Immaculée to her current career path.</span></span></p>
          <p class="Paragraph SCXW240355080 BCX0"><strong><span class="EOP SCXW240355080 BCX0" data-ccp-props="{}"><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">“I chose to become a car mechanic because, one day, my family, </span><span class="NormalTextRun ContextualSpellingAndGrammarErrorV2Themed SCXW240355080 BCX0">myself</span><span class="NormalTextRun SCXW240355080 BCX0"> and other passengers were forced to spend the night in the middle of the park because of a breakdown,” she recounts. “We were exposed to wild animals and feared being raped or killed by armed people in the area.”</span></span></span></strong></p>
        <div class="OutlineElement Ltr SCXW240355080 BCX0">
          <p class="Paragraph SCXW240355080 BCX0"><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">The incident left a deep impression on the teen. She recalled the helplessness of not being able to fix the </span><span class="NormalTextRun SCXW240355080 BCX0">vehicle that night and, when presented with training options that included more traditional skills for women—like hairdressing and dressmaking—she chose mechanics instead.&nbsp;</span></span><span class="EOP SCXW240355080 BCX0" data-ccp-props="{}">&nbsp;</span></p>
        </div>
        <div class="OutlineElement Ltr SCXW240355080 BCX0">
          <p class="Paragraph SCXW240355080 BCX0"><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">Whatever the paths </span><span class="NormalTextRun SCXW240355080 BCX0">they’ve</span><span class="NormalTextRun SCXW240355080 BCX0"> chosen for themselves, Immaculée’s cohort of budding mechanics, hairdressers, </span><span class="NormalTextRun SCXW240355080 BCX0">dressmakers</span><span class="NormalTextRun SCXW240355080 BCX0"> and shopkeepers are </span><span class="NormalTextRun SCXW240355080 BCX0">demonstrating</span><span class="NormalTextRun SCXW240355080 BCX0"> immense courage. As they apply themselves to building skills and setting goals, </span><span class="NormalTextRun SCXW240355080 BCX0">they’re</span><span class="NormalTextRun SCXW240355080 BCX0"> showing that </span><span class="NormalTextRun SCXW240355080 BCX0">it’s</span><span class="NormalTextRun SCXW240355080 BCX0"> possible to work for your dreams, even when the context is unfavourable.</span></span><span class="EOP SCXW240355080 BCX0" data-ccp-props="{}">&nbsp;</span></p>
        </div>
        <div class="OutlineElement Ltr SCXW240355080 BCX0">
          <p class="Paragraph SCXW240355080 BCX0"><em><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">*</span></span><span class="TextRun SCXW240355080 BCX0" lang="EN-GB" xml:lang="EN-GB" data-contrast="auto"><span class="NormalTextRun SCXW240355080 BCX0">World Vision’s Raw Hope program is also known internationally as Childhood Rescue</span></span></em></p>
        </div>
        </div>
      `,
    },
    {
      html: '<h1>Forced from home by drought</h1><p>When asked what makes her happy, Udugow responds like every matriarch I’ve ever known.</p>\n<p>“When my children are happy that makes me happy. Their happiness is my happiness.”&nbsp;</p>\n<p>And what&nbsp;makes her afraid? “The opposite—when I cannot meet my family’s needs.”</p>\n<p>She says this while cradling her grandson, Sadak, in her arms, sitting on a low wooden stool in her makeshift shelter at the Awal Barwaago settlement for internally displaced people. When <a href="https://www.un.org/en/observances/womens-day" target="_blank" rel="noopener">International Women’s Day</a> rolls around, it’s women like Udugow that I think about. Women rising to face challenges they never would have wished for.&nbsp;</p>\n<p><strong>Forced from home by drought</strong></p>\n<p>“As I recall, growing up, we didn’t have this many frequent dry seasons and wells drying up,” Udugow says.</p>\n<p>It’s a hot, dry and windy day—typical for January in Baidoa, Somalia. For six years, 45-year-old Udugow and her family have been living in the camp. Severe drought drove them from their home in the Wajid district, about 90 kilometres away.&nbsp;</p>\n<p>“By the time we decided to leave, the wells had dried, the farms were dry with no crops,” she says. “There was nothing for us to eat.”&nbsp;</p>\n<p><strong>Building a new life in limbo</strong></p>\n<p>Udugow and her husband Ibrahim have two adult daughters, aged 20 and 18, and a five-year-old son. Ibrahim earns money wherever he can, usually as a donkey cart transporter. Udugow collects and sells firewood once a week, travelling two hours by foot to the outskirts of Baidoa. &nbsp;</p>\n<p>“It’s not much, what I get after all the struggle,” she admits, “but that’s what am relying on for now to put food on the table.” &nbsp;</p>\n<p>Udugow has another specific worry that weighs on her heart: her daughter, Faduma. Since Faduma’s husband abandoned her and her children, they now live with Udugow and Ibrahim.&nbsp;</p>\n<p>“You can see I have grandchildren. They are young. They have many needs,” Udugow says. “As a mother, I cannot bear to see my daughter go through this alone.” &nbsp;</p>\n<p>The weight of caring for her children and grandchildren pulls on Udugow’s shoulders, and the rough living conditions make everything harder: “You can also see the housing situation here and understand for yourself that things are difficult.”&nbsp;</p>\n<p>Even with these heavy burdens, Udugow prefers this life to the one they left behind.&nbsp;</p>\n<p>“Life here is better,” she says firmly, “even though it is away from home, and I miss home, at least here we get assistance.”&nbsp;</p>\n<p><strong>Support from World Vision and Global Affairs Canada&nbsp;</strong></p>\n<p>Udugow remembers arriving at the camp six years ago. World Vision was the first organization she encountered. At that time, she recalls receiving food, medication and water. &nbsp;</p>\n<p>A water collection point 100 metres from her home, funded by Global Affairs Canada, has provided a constant flow of water ever since they’ve lived here. Udugow says she collects six 20-litre containers every day.&nbsp;</p>\n<p>Her two grandchildren attend a child-friendly space, also supported by Global Affairs Canada, where they learn and play and get snacks. (According to the World Vision facilitator, this could be the only food some children get all day.)&nbsp;</p>\n<p>Through a World Vision project, Udugow’s daughter Faduma has also received skills training, learning tie-dye techniques and henna makeup application. She hopes this will provide another income source in the future.&nbsp;</p>\n<p><strong>Motivated by her family and her faith&nbsp;</strong></p>\n<p>Udugow credits her faith as a major source of strength. Whenever she is afraid or facing difficulty, she prays. &nbsp;</p>\n<p>“Life hasn’t been easy on us but I still find hope and inspiration when I look at my children and my grandchildren,” she says. &nbsp;</p>\n<p>Will they ever return home? Udugow is unsure.&nbsp;</p>\n<p>“The problems that made us leave in the first place, are still there,” she says. “Maybe one day, I can consider going back if that all goes away.”</p>',
    },
    {
      html: '<p><span data-teams="true"><span class="ui-provider a b c d e f g h i j k l m n o p q r s t u v w x y z ab ac ae af ag ah ai aj ak" dir="ltr">Like this story? Explore more <a id="menur1vhk" class="fui-Link ___1rxvrpe f2hkw1w f3rmtva f1ewtqcl fyind8e f1k6fduh f1w7gpdv fk6fouc fjoy568 figsok6 f1hu3pq6 f11qmguv f19f4twv f1tyq0we f1g0x7ka fhxju0i f1qch9an f1cnd47f fqv5qza f1vmzxwi f1o700av f13mvf36 f1cmlufx f9n3di6 f1ids18y f1tx3yz7 f1deo86v f1eh06m1 f1iescvh fhgqx19 f1olyrje f1p93eir f1nev41a f1h8hb77 f1lqvz6u f10aw75t fsle3fq f17ae5zn" title="https://beta.worldvision.ca/en/learn/latest-stories.html" href="https://beta.worldvision.ca/en/learn/latest-stories.html" aria-label="Link stories of impact">stories of impact</a> in the communities we serve.</span></span></p>\n<p>&nbsp;</p>\n<p>&nbsp;</p>',
    },
  ],
  images: [
    {
      title: 'Rosa',
      description:
        'In Goma, DRC, where World Vision’s Raw Hope program is being implemented, a smiling young woman in navy blue coveralls holds a wrench, sitting on the ground between two vehicles.',
      _path:
        '/content/dam/wvc/images/multi-context-content/shared-images/education-escaping-oppression-mother-with-her-three-children.jpg',
    },
    {
      title: '',
      description:
        'Immaculée acknowledges that mechanics are traditionally men, “yet here I am,” she says. “I have not followed this theory, and I stand out in my work.”',
      _path:
        '/content/dam/wvc/images/multi-context-content/shared-images/education-escaping-oppression-boy-in-a-soccer-shirt.jpg',
    },
    {
      title: 'immaculee-smiles-raw-hope-mechanic-garage-poster',
      description:
        'Immaculée smiles at the auto mechanic garage where her training is taking place.',
      _path:
        '/content/dam/wvc/images/multi-context-content/shared-images/education-escaping-oppression-boy-wearing-a-soccer-jersey.jpg',
    },
    {
      title: 'immaculee-mechainic-raw-hope-fixes-car',
      description:
        'Immaculée is one of 90 young people who are preparing for professional life in the midst of long-lasting conflict in the DRC.',
      _path:
        '/content/dam/wvc/images/multi-context-content/shared-images/education-escaping-oppression-girl-writing-in-a-book-1.jpg',
    },
  ],
  DisplayDate: '2025-01-11',
  status: 'approved',
  createdByAuthorDetails: {
    firstName: 'Katie',
    lastName: 'Hackett',
  },
  pageName: 'Meet Immaculée, Female Mechanic-in-Training',
  metadescription:
    'This teenage rockstar is jumping into a male-dominated trade with no regrets—watch her explain why.',
  publisheddate: '',
  video: 'https://www.youtube.com/watch?v=4b2rP1YUlU0',
  videoTitle: 'Watch now:',
  videoCoverImage: {
    _path:
      'https://stg-aem.worldvision.ca/content/dam/wvc/images/multi-context-content/shared-images/world-vision-canada-lente-and-peninah-thumbnail.jpg',
  },
  quote: [
    {
      quoteBody: {
        html: '<p>We stand by the belief that if we have the ability to help, we have the responsibility to act. This ethos shapes our organization’s approach to humanitarian work, emphasizing not just charity, but sustainable development, empowerment, and advocacy.</p>',
        plaintext:
          'We stand by the belief that if we have the ability to help, we have the responsibility to act. This ethos shapes our organization’s approach to humanitarian work, emphasizing not just charity, but sustainable development, empowerment, and advocacy.',
      },
    },
  ],
};

export const articleWithEvenParagraph: Story = {
  args: {
    article: articleStroyData,
  },
};
