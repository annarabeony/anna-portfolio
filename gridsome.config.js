// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config

module.exports = {
  siteName: "Portfolio of Anna Rabeony",
  siteUrl: `https://www.itsnwa.com`,
  host: "0.0.0.0",
  titleTemplate: "%s - Anna Rabeony",
  siteDescription: "Anna Rabeony - I’m a Product Design Student based in London, previously interned with Wiredcraft, in Shanghai and with Ucaya, in Nantes. If you’re interested in getting in touch, feel free to contact me",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "case_studies/**/*.md",
        typeName: "CaseStudyPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "Experience/**/*.md",
        typeName: "ExperiencePost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: '@gridsome/plugin-critical',
      options: {
        paths: ['/'],
        width: 1300,
        height: 900
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
