import React from 'react';
export const Nav30DataSource = {
  wrapper: { className: 'header3 home-page-wrapper' },
  page: { className: 'home-page' },
  logo: {
    className: 'header3-logo',
    children: 'https://i.imgur.com/3bNmL4o.jpg',
  },
  Menu: {
    className: 'header3-menu',
    children: [
      {
        name: 'item0',
        className: 'header3-item',
        children: {
          href: '#',
          children: [
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>在线咨询</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'text',
            },
          ],
          target: '',
        },
        subItem: [
          {
            className: 'item-sub lfc8szzctq-editor_css',
            children: {
              className: 'item-sub-item lfc8qgisnka-editor_css',
              children: [
                {
                  name: 'image0',
                  className: 'item-image lfc8qklyxfb-editor_css',
                  children: 'https://i.imgur.com/EMFKC6q.jpg',
                },
                {
                  name: 'title~lfc8sx38er9',
                  className: 'lfc8sy1l80k-editor_css',
                  children: (
                    <span>
                      <span>
                        <span>
                          <p>专业导师咨询</p>
                        </span>
                      </span>
                    </span>
                  ),
                },
              ],
            },
          },
        ],
      },
    ],
  },
  mobileMenu: { className: 'header3-mobile-menu' },
};
export const Banner30DataSource = {
  wrapper: { className: 'banner3 lffao3wi4pa-editor_css' },
  textWrapper: {
    className: 'banner3-text-wrapper lffapud5lg-editor_css',
    children: [
      {
        name: 'nameEn',
        className: 'banner3-name-en lfc9c78bjnh-editor_css',
        children: (
          <span>
            <p>科研提升、考研申博、拿奖评优、职称晋升、本科毕论</p>
          </span>
        ),
      },
      {
        name: 'slogan',
        className: 'banner3-slogan lfc9bqm3lul-editor_css',
        children: '海内外论文辅导专业平台',
        texty: true,
      },
      {
        name: 'name',
        className: 'banner3-name lfgqxkjh2k-editor_css',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>选择稿定论文，立刻搞定论文</p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
      },
      {
        name: 'button',
        className: 'banner3-button lffaou7kx5t-editor_css',
        children: (
          <span>
            <span>
              <span>
                <p>立即咨询</p>
              </span>
            </span>
          </span>
        ),
        target: '',
        type: 'primary',
      },
      {
        name: 'time',
        className: 'banner3-time lfc9lmanece-editor_css',
        children: (
          <span>
            <p>不通过不收费，不达标退全款</p>
          </span>
        ),
      },
    ],
  },
};
export const Feature60DataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },
    titleWrapper: {
      className: 'feature6-title-wrapper',
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: { className: 'feature6-title-bar' },
      },
      title: { className: 'feature6-title' },
    },
    children: [
      {
        title: {
          className: 'feature6-title-text lfcg27359d-editor_css',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <p>平台数据</p>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child0',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '万' },
              toText: true,
              children: '209',
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <span>
                    <span>
                      <p>全栈咨询服务</p>
                    </span>
                  </span>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child1',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '1.52',
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>数据文献储备</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            className: 'feature6-number-wrapper',
            name: 'child2',
            number: {
              className: 'feature6-number',
              unit: { className: 'feature6-unit', children: '亿' },
              toText: true,
              children: '2.10',
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <span>
                    <span>
                      <p>网站搜索数据</p>
                    </span>
                  </span>
                </span>
              ),
            },
          },
        ],
      },
      {
        title: {
          className: 'feature6-title-text lfcg2a9mr5p-editor_css',
          children: (
            <span>
              <span>
                <span>
                  <span>
                    <p>服务数据</p>
                  </span>
                </span>
              </span>
            </span>
          ),
        },
        className: 'feature6-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            name: 'child0',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number lfce85at1j-editor_css',
              unit: {
                className: 'feature6-unit lfce88ba8ap-editor_css',
                children: (
                  <span>
                    <span>
                      <span>
                        <p>年</p>
                      </span>
                    </span>
                  </span>
                ),
              },
              toText: true,
              children: '16',
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <span>
                    <p>行业服务经验</p>
                  </span>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            name: 'child1',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit lfcegan3x2n-editor_css',
                children: (
                  <span>
                    <span>
                      <p>万</p>
                    </span>
                  </span>
                ),
              },
              toText: true,
              children: '10.74',
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <span>
                    <span>
                      <p>论文一对一全流程辅导</p>
                    </span>
                  </span>
                </span>
              ),
            },
          },
          {
            md: 8,
            xs: 24,
            name: 'child2',
            className: 'feature6-number-wrapper',
            number: {
              className: 'feature6-number',
              unit: {
                className: 'feature6-unit lfcegmfqi3h-editor_css',
                children: (
                  <span>
                    <span>
                      <p>万</p>
                    </span>
                  </span>
                ),
              },
              toText: true,
              children: '8.98',
            },
            children: {
              className: 'feature6-text',
              children: (
                <span>
                  <span>
                    <span>
                      <p>助力作者顺利完稿</p>
                    </span>
                  </span>
                </span>
              ),
            },
          },
        ],
      },
    ],
  },
};
export const Feature30DataSource = {
  wrapper: {
    className: 'home-page-wrapper content3-wrapper lfc2ck7inn-editor_css',
  },
  page: { className: 'home-page content3' },
  OverPack: { playScale: 0.3 },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <p>稿定论文 · 专业的服务</p>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
        className: 'title-h1 lfceld449da-editor_css',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <span>
              <p>基于国内外强大的教育资源</p>
            </span>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content3-block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://i.imgur.com/O2ahYKh.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title lfcf3bmsyds-editor_css',
            children: (
              <span>
                <span>
                  <p>&nbsp;权威团队</p>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content lfcg1lq7rk9-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <p>
                      海内外专业团队服务，平台拥有海外名校名师3000人以上，以及985/211高校硕博师资4000人以上，为您打造高质量论文。
                    </p>
                  </span>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://i.imgur.com/yuUtXF2.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title lfcf3q88yyo-editor_css',
            children: (
              <span>
                <p>海量文库</p>
              </span>
            ),
          },
          content: {
            className: 'content3-content lfcg19vwwy-editor_css',
            children: (
              <span>
                <p>
                  全平台打通数据支持，全行业全专业知识库文献储备充足，为您的论文提供饱和信息资源。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://i.imgur.com/HdjYmw9.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title lfcf3tvzepd-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>专属导师</p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content lfcg1dmzmk-editor_css',
            children: (
              <span>
                <p>
                  全程专属导师一对一服务，可24小时线上服务，让每一步流程都放心可靠、有法可依。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://i.imgur.com/iBj0IKT.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title lfcf3xiq7g-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <p>高效流程</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content lfcg1ia9a5-editor_css',
            children: (
              <span>
                <p>
                  匹配同领域专属导师，一对一全流程服务，快速沟通需求，最快48小时完成初稿，全流程配合修改润色。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://i.imgur.com/VBivJbl.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title lfcf4046kuj-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <p>专业降重</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content lfcg15ioh5-editor_css',
            children: (
              <span>
                <p>
                  专业团队提供降重服务，确保语义不变，结构不变，达到理想定稿水平，支持24小时免费降重培训。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'content3-block',
        md: 8,
        xs: 24,
        children: {
          icon: {
            className: 'content3-icon',
            children: 'https://i.imgur.com/a9d7R3c.png',
          },
          textWrapper: { className: 'content3-text' },
          title: {
            className: 'content3-title lfcf445qeuf-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <p>保密安全</p>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'content3-content lfcg1fvb43r-editor_css',
            children: (
              <span>
                <p>
                  高度重视用户信息安全，保证用户个人信息，论文资料数据安全不外泄。保证论文截稿即删，绝不留档、坚定维护用户版权
                </p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Teams10DataSource = {
  wrapper: { className: 'home-page-wrapper teams1-wrapper' },
  page: { className: 'home-page teams1' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>稿定论文 · 平台架构</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </span>
          </span>
        ),
        className: 'lfcesk5qs1n-editor_css',
      },
    ],
  },
  block: {
    className: 'block-wrapper',
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image lfgrds0eci9-editor_css',
              children: 'https://i.imgur.com/T7SlOoQ.png',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>期刊单位</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>权威+资深+协同</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <span>
                    <span>
                      <p>
                        国内外主流权威期刊单位，固定长期合作单位，超400类期刊，3000余家机构战略合作，让您全流程轻松托管，快速登刊。
                      </p>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image lfgrdlze0h-editor_css',
              children: 'https://i.imgur.com/qk9OneG.png',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>名师团队</p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <p>专业+耐心+高效</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content',
              children: (
                <span>
                  <p>
                    团队聘请4000人以上专业导师团队，涵盖超200个热门专业领域，单日2000余导师实时在线辅导，为您的论文质量保驾护航。
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        titleWrapper: {
          children: [
            {
              name: 'image',
              className: 'teams1-image lfgre4czr7l-editor_css',
              children: 'https://i.imgur.com/NNZ3Ty9.png',
            },
            {
              name: 'title',
              className: 'teams1-title',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>技术支持</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
            {
              name: 'content',
              className: 'teams1-job',
              children: (
                <span>
                  <span>
                    <p>维护+更新+监控</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'content1',
              className: 'teams1-content lfcgggvp8ia-editor_css',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>
                              我们团队提供24小时平台维护运营，并实时更新全球最新文献知识库，实时监控全领域全专业最新动向，确保为您输出最新论文相关数据信息。
                            </p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
    ],
  },
};
export const Content50DataSource = {
  wrapper: {
    className: 'home-page-wrapper content5-wrapper lfc2duz12r-editor_css',
  },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>稿定论文 · 客户案例</p>
            </span>
          </span>
        ),
        className: 'title-h1 lfcfifo6lb-editor_css',
      },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <span>
            <p>选择稿定论文，立刻搞定论文</p>
          </span>
        ),
      },
    ],
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block0',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: 'https://i.imgur.com/ZfiCs0a.jpg' },
          content: {
            children: (
              <span>
                <span>
                  <p>硕论客户</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block1',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: 'https://i.imgur.com/ZdJgUWB.jpg' },
          content: {
            children: (
              <span>
                <span>
                  <p>本论客户</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: 'https://i.imgur.com/9mmlBRl.jpg' },
          content: {
            children: (
              <span>
                <span>
                  <p>博论客户</p>
                </span>
              </span>
            ),
          },
        },
      },
      {
        name: 'block3',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: 'https://i.imgur.com/liv4uWf.jpg' },
          content: {
            children: (
              <span>
                <p>期刊客户</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block4',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: 'https://i.imgur.com/850TrfH.jpg' },
          content: {
            children: (
              <span>
                <p>硕论客户</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block5',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: 'https://i.imgur.com/jKUCzeT.jpg' },
          content: {
            children: (
              <span>
                <p>博论客户</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block6',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: 'https://i.imgur.com/iA5FwCZ.jpg' },
          content: {
            children: (
              <span>
                <p>博论客户</p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block7',
        className: 'block',
        md: 6,
        xs: 24,
        children: {
          wrapper: { className: 'content5-block-content' },
          img: { children: 'https://i.imgur.com/eQqO6JZ.jpg' },
          content: {
            children: (
              <span>
                <p>本论客户</p>
              </span>
            ),
          },
        },
      },
    ],
  },
};
export const Content90DataSource = {
  wrapper: { className: 'home-page-wrapper content9-wrapper' },
  page: { className: 'home-page content9' },
  titleWrapper: {
    className: 'title-wrapper',
    children: [
      {
        name: 'image',
        children:
          'https://gw.alipayobjects.com/zos/rmsportal/PiqyziYmvbgAudYfhuBr.svg',
        className: 'title-image',
      },
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>稿定论文·· 服务流程</p>
            </span>
          </span>
        ),
        className: 'title-h1 lfcfiio36ya-editor_css',
      },
    ],
  },
  block: {
    className: 'timeline',
    children: [
      {
        name: 'block0',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: 'https://i.imgur.com/uJKxDGv.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
          },
          name: {
            className: 'block-name lfhs2f67fos-editor_css',
            children: (
              <span>
                <span>
                  <p>需求沟通</p>
                </span>
              </span>
            ),
          },
          post: {
            className: 'block-post lfhs2qjbgc-editor_css',
            children: '公司 职位',
          },
          time: {
            className: 'block-time lfhrzgpb8s-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <p>24小时内配合完成</p>
                  </span>
                </span>
              </span>
            ),
          },
          title: {
            className: 'block-title lfhrzar4cfq-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>1、对口专业导师一对一沟通需求</p>
                      <p>
                        <br />
                      </p>
                      <p>2、导师根据需求建议确定拟题和方向</p>
                      <p>
                        <br />
                      </p>
                      <p>3、导师根据需求确定客户行文和注意事项</p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content lfhrxsom9l7-editor_css',
            children: '',
          },
        },
      },
      {
        name: 'block1',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: 'https://i.imgur.com/8Hndpyu.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name lfhs30ha2tk-editor_css',
            children: (
              <span>
                <p>初稿进行</p>
              </span>
            ),
          },
          post: {
            className: 'block-post lfhs3886e8l-editor_css',
            children: '公司 职位',
          },
          time: {
            className: 'block-time lfhs9dwab57-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <p>规定时间内团队协作</p>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          title: {
            className: 'block-title lfhs4y8kepo-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <p>1、导师根据沟通需求开始初稿编写</p>
                        <p>
                          <br />
                        </p>
                        <p>2、导师24小时跟踪客户需求适当调整</p>
                        <p>
                          <br />
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content lfhs0asywyj-editor_css',
            children: (
              <span>
                <p>
                  经过近 3
                  年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI
                  资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。
                </p>
              </span>
            ),
          },
        },
      },
      {
        name: 'block2',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: 'https://i.imgur.com/lqvUZHk.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
          },
          name: {
            className: 'block-name lfhsa9ie2xd-editor_css',
            children: (
              <span>
                <p>论文优化</p>
              </span>
            ),
          },
          post: {
            className: 'block-post lfhs3esctmm-editor_css',
            children: '公司 职位',
          },
          time: {
            className: 'block-time lfhs9xfdrfu-editor_css',
            children: (
              <span>
                <p>全天24小时配合</p>
              </span>
            ),
          },
          title: {
            className: 'block-title lfhs9t3qy0t-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>1、导师根据需求做论文查重</p>
                            <p>
                              <br />
                            </p>
                            <p>2、导师根据需求做论文降重</p>
                            <p>
                              <br />
                            </p>
                            <p>3、导师根据需求做论文润色</p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content lfhs0cu80t-editor_css',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
      {
        name: 'block3',
        className: 'block-wrapper',
        playScale: 0.3,
        children: {
          imgWrapper: { className: 'image-wrapper' },
          textWrapper: { className: 'text-wrapper' },
          img: {
            className: 'block-img',
            children: 'https://i.imgur.com/092ceGc.png',
          },
          icon: {
            className: 'block-icon',
            children:
              'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
          },
          name: {
            className: 'block-name lfhsabtt8rg-editor_css',
            children: (
              <span>
                <p>完美交付</p>
              </span>
            ),
          },
          post: {
            className: 'block-post lfhs3lzgfpq-editor_css',
            children: '公司 职位',
          },
          time: {
            className: 'block-time lfhsahdph8s-editor_css',
            children: (
              <span>
                <span>
                  <p>按时截稿</p>
                </span>
              </span>
            ),
          },
          title: {
            className: 'block-title lfhsagxaba-editor_css',
            children: (
              <span>
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <span>
                              <p>1、导师根据需求交付论文</p>
                              <p>
                                <br />
                              </p>
                              <p>2、导师全程跟踪直到论文通过</p>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            ),
          },
          content: {
            className: 'block-content lfhs0e7uqu-editor_css',
            children:
              '经过近 3 年的打磨，在助力中台产品研发效能提升的目标之上，包含设计语言、UI 资产、可视化以及产品体验相关的蚂蚁中台设计体系正在逐步成型。此次分享包含两部分，在介绍蚂蚁设计体系的同时，也会和大家分享我们在设计语言的部分探索。',
          },
        },
      },
    ],
  },
};
export const Pricing20DataSource = {
  wrapper: {
    className: 'home-page-wrapper pricing2-wrapper lfc2e87g0l-editor_css',
  },
  page: { className: 'home-page pricing2' },
  OverPack: { playScale: 0.3, className: 'pricing2-content-wrapper' },
  titleWrapper: {
    className: 'pricing2-title-wrapper',
    children: [
      {
        name: 'title',
        children: (
          <span>
            <span>
              <p>稿定论文 · 服务费用</p>
            </span>
          </span>
        ),
        className: 'pricing2-title-h1 lfcfisy9om-editor_css',
      },
    ],
  },
  Table: {
    name: 'tabsTitle',
    size: 'default',
    className: 'pricing2-table',
    columns: {
      children: [
        {
          dataIndex: 'name',
          key: 'name',
          name: 'empty',
          childWrapper: {
            children: [
              { name: 'name', children: ' ' },
              { name: 'content', children: ' ' },
            ],
          },
        },
        {
          dataIndex: 'free',
          key: 'free',
          name: 'free',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <span>
                      <p>专科论文</p>
                    </span>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <span>
                    <span>
                      <span>
                        <p>¥499起</p>
                      </span>
                    </span>
                  </span>
                ),
              },
            ],
          },
        },
        {
          dataIndex: 'basic',
          key: 'basic',
          name: 'basic',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <p>本科论文</p>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>¥799起</p>
                        </span>
                      </span>
                    </span>
                  </span>
                ),
              },
            ],
          },
        },
        {
          dataIndex: 'pro',
          key: 'pro',
          name: 'pro',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <p>研究生论文</p>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <span>
                    <p>¥8999起</p>
                  </span>
                ),
              },
            ],
          },
        },
        {
          dataIndex: 'unlimited',
          key: 'unlimited',
          name: 'unlimited',
          childWrapper: {
            className: 'pricing2-table-name-block',
            children: [
              {
                name: 'name',
                className: 'pricing2-table-name',
                children: (
                  <span>
                    <p>博士论文</p>
                  </span>
                ),
              },
              {
                name: 'content',
                className: 'pricing2-table-money',
                children: (
                  <span>
                    <p>¥12999起</p>
                  </span>
                ),
              },
            ],
          },
        },
      ],
    },
    dataSource: {
      children: [
        {
          name: 'list0',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>拟题</p>
                </span>
              ),
            },
            {
              children: (
                <span>
                  <span>
                    <p>同专业导师一对一服务</p>
                  </span>
                </span>
              ),
              name: 'content0',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <p>同专业导师一对一服务</p>
                </span>
              ),
              name: 'content1',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <p>同专业导师一对一服务</p>
                </span>
              ),
              name: 'content2',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <p>同专业导师一对一服务</p>
                </span>
              ),
              name: 'content3',
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list1',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>初稿</p>
                </span>
              ),
            },
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>导师一对一定方向，7天左右完成初稿</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'content0',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>导师一对一定方向，15天左右完成初稿</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'content1',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <span>
                            <p>导师一对一定方向，25天左右完成初稿</p>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              name: 'content2',
              className: 'pricing2-table-content',
            },
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>导师一对一定方向，35天左右完成初稿</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'content3',
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list2',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>润色</p>
                </span>
              ),
            },
            {
              name: 'content0',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>语言语种优化、简明摘要、格式排版、稿件翻译</p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children: (
                <span>
                  <p>语言语种优化、简明摘要、格式排版、稿件翻译</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <p>语言语种优化、简明摘要、格式排版、稿件翻译</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>语言语种优化、简明摘要、格式排版、稿件翻译</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list3',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>查重</p>
                </span>
              ),
            },
            {
              children: (
                <span>
                  <span>
                    <span>
                      <p>专业去重、降重、查重率低于30%，可根据需要指定查重率</p>
                    </span>
                  </span>
                </span>
              ),
              name: 'content0',
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children: (
                <span>
                  <span>
                    <span>
                      <p>专业去重、降重、查重率低于30%，可根据需要指定查重率</p>
                    </span>
                  </span>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <span>
                          <p>
                            专业去重、降重、查重率低于15%，可根据需要指定查重率
                          </p>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <span>
                    <p>专业去重、降重、查重率低于15%，可根据需要指定查重率</p>
                  </span>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list4',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>审核</p>
                </span>
              ),
            },
            {
              name: 'content0',
              children: (
                <span>
                  <p>内部导师团队专业审稿，导师与客户一对一沟通确定</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children: (
                <span>
                  <p>内部导师团队专业审稿，导师与客户一对一沟通确定</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <p>内部导师团队专业审稿，导师与客户一对一沟通确定</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>内部导师团队专业审稿，导师与客户一对一沟通确定</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
        {
          name: 'list5',
          children: [
            {
              className: 'pricing2-table-content-name',
              name: 'name',
              children: (
                <span>
                  <p>终稿</p>
                </span>
              ),
            },
            {
              name: 'content0',
              children: (
                <span>
                  <p>按时交稿，导师全程跟踪，直到论文通过</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content1',
              children: (
                <span>
                  <p>按时交稿，导师全程跟踪，直到论文通过</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content2',
              children: (
                <span>
                  <p>按时交稿，导师全程跟踪，直到论文通过</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
            {
              name: 'content3',
              children: (
                <span>
                  <p>按时交稿，导师全程跟踪，直到论文通过</p>
                </span>
              ),
              className: 'pricing2-table-content',
            },
          ],
        },
      ],
    },
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: {
    className: 'footer1 lfgsz91dru-editor_css',
    playScale: 0.2,
    appear: true,
  },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: 'https://i.imgur.com/3bNmL4o.jpg',
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <p>选择稿定论文，立刻搞定论文</p>
                </span>
              ),
              className: 'lfgt1vw7gzm-editor_css',
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '产品' },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: '#',
              children: (
                <span>
                  <p>论文查重</p>
                </span>
              ),
            },
            {
              name: 'link1',
              href: '#',
              children: (
                <span>
                  <p>论文辅导</p>
                </span>
              ),
            },
            {
              name: 'link2',
              href: '#',
              children: (
                <span>
                  <span>
                    <p>论文润色</p>
                  </span>
                </span>
              ),
            },
            {
              name: 'link3',
              href: '#',
              children: (
                <span>
                  <p>期刊服务</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>稿定论文</p>
                </span>
              ),
            },
            {
              href: '#',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <p>右方咨询</p>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block lfhskpxb61d-editor_css',
        title: { children: 'https://i.imgur.com/EMFKC6q.jpg' },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>免费专业导师一对一咨询</p>
                </span>
              ),
              className: 'lfhskk6bysn-editor_css',
            },
            {
              href: '#',
              name: 'link1',
              children: 'Ant Motion',
              className: 'lfhsl3pr2ro-editor_css',
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper lfgsyifwrzr-editor_css' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>
          <p>
            免责声明：本站持有《出版物经营许可证》，主要从事杂志订阅与学术服务，不是任何杂志官网，不涉及出版事务，特此申明。
          </p>
          <p>如有侵权，请立即联系我们，我们立即删除。</p>
        </span>
      </span>
    ),
  },
};
