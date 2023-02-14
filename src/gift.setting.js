
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '214送礼抽奖',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'a', wording: '想你爱你！', },
    { key: 's', wording: '离不开你哟！', },
    { key: 'd', wording: '我的宝~我的卿卿~我的女孩~', },
  ],
  // 最终解释权归属人
  owner: 'Hansen',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: null,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '音速500G币', alias: '500GB', image: '/images/icon_GB.png',  description: '有点少，算鼓励奖' },
  { key: 'w', name: '音速1000G币', alias: '1000GB', image: '/images/icon_GB.png',  description: '还行吧，一件衣服？' },
  { key: 'e', name: '音速2000G币', alias: '2000GB', image: '/images/icon_GB.png',  description: '可以可以，一个戒指？' },
  { key: 'r', name: '520红包', alias: '520', image: '/images/icon_RMB.png',  description: 'RMB的香气~' },
  { key: 't', name: '音速5000G币', alias: '5000GB', image: '/images/icon_GB.png',  description: '有点东西，两个戒指？' },
  { key: 'y', name: '音速10000G币', alias: '10000GB', image: '/images/icon_GB.png',  description: '666，可以累充了！' },
  { key: 'u', name: '音速12000G币', alias: '12000GB', image: '/images/icon_GB.png',  description: '兔然暴富的滋味！' },
  { key: 'i', name: '谢谢惠顾', alias: '谢谢惠顾', image: '/images/icon_cry.png',  description: 'Sorry，try again!' },
];
