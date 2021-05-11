---客户端请求用户登录
CS_USER_LOGIN = "Login/userLogin";
---客户端请求重新登录
CS_USER_RELOGIN = "Login/userReLogin";
---客户端请求平台登录
CS_PLATFORM_LOGIN = "Login/userPlatformLogin";
---客户端请求平台检查
CS_PLATFORM_CHECK = "Login/userPlatformCheck";
---服务器踢掉用户在线
SC_USER_KICKOUT = "Login/userTickOut";
---初始化用户数据
SC_INIT_USER_INFO = "Hall/initUserInfo";
---玩家信息改变
SC_USER_DATA_CHANGE = "Hall/userInfoChange";
---获取其他玩家信息
CS_GET_OTHER_USER_INFO = "Hall/onGetOtherUserInfo";
---修改用户信息
CS_USER_INFO_CHANGE = "Hall/userInfoUpdate";
---分享游戏
CS_SHARE_GAME = "Hall/shareGame";
---请求匹配
CS_MATCH_REQUEST = "Match/matchRequest";
---请求取消匹配
CS_CANCEL_MATCH_REQUEST = "Match/cancelMatchRequest";
---匹配结果
SC_MATCH_RESULT = "Match/matchResult";
---匹配时间
CS_MATCH_TIME = "Match/matchTimeReq";
---获得商店信息
CS_BATTLE_STORE_GETINFO = "Fight/storeGetInfoReq";
---返回商店信息
SC_BATTLE_STORE_SYNCINFO = "Fight/storeInfoRes";
---刷新商店
CS_BATTLE_STORE_REFRESH = "Fight/storeRefreshReq";
---买角色
CS_BATTLE_STORE_BUY = "Fight/storeBuyReq";
---买角色返回
SC_BATTLE_STORE_BUY = "Fight/storeBuyRes";
---锁定商店
CS_BATTLE_STORE_LOCK = "Fight/storeLockReq";
---锁定商店返回
SC_BATTLE_STORE_LOCK = "Fight/storeLockRes";
---战斗状态变化通知
SC_BATTLE_ROUND_STATE_CHANGE = "Fight/battleStateChange";
---战斗状态tick通知
SC_BATTLE_ROUND_STATE_TICK = "Fight/battleStateTick";
---战斗基本信息的
SC_BATTLE_BASIC_INFO = "Fight/battleBasicInfo";
---战斗loading请求
CS_BATTLE_LOADING = "Fight/battleLoadingReq";
---战斗loading回包
SC_BATTLE_LOADING = "Fight/battleLoadingRes";
---战斗loading所有玩家已完成
SC_BATTLE_LOADING_ALL_COMPLETE = "Fight/battleLoadingAllComplete";
---战斗readyreq
CS_BATTLE_READY = "Fight/battleReadyReq";
---战斗readyres
SC_BATTLE_READY = "Fight/battleReadyRes";
---战斗开始通知
SC_BATTLE_START = "Fight/battleStartNotify";
---战斗结果
SC_BATTLE_RESULT = "Fight/battleResultNotify";
---战斗结束
SC_BATTLE_FINISH = "Fight/battleFinishNotify";
---最终回合
SC_BATTLE_FINAL_ROUND = "Fight/finalRound";
---退出副本请求
CS_EXIT_COPY_REQUEST = "Fight/exitCopyRequest";
---回合玩家属性更新通知
SC_ROUND_PLAYER_PROP_UPDATE = "Fight/battleRoundPropUpdate";
---获取战斗属性回包
SC_GET_ROUND_PLAYER_PROP = "Fight/battleRoundGetPlayerPropRes";
---准备阶段通知客户端清理战场
SC_ROUND_CLEAR_NOTIFY = "Fight/battleRoundClearNotify";
---回合匹配信息通知
SC_ROUND_MATCH_INFO = "Fight/battleRoundMatchInfoNotify";
---回合结束通知
SC_ROUND_END = "Fight/battleRoundEndNotify";
---获取战斗详情
CS_GET_ROUND_DETAIL = "Fight/battleGetRoundDetailReq";
---获取战斗详情回包
SC_GET_ROUND_DETAIL = "Fight/battleGetRoundDetailRsp";
---战斗出局
SC_ROUND_KNOCKOUT = "Fight/battleRoundKnockout";
---抢购进入场景
SC_RUSH_BUY_GOTO_SCENES = "Fight/rushBuyGotoScenes";
---请求抢购
CS_RUSH_BUY_BID = "Fight/rushBuyBid";
---取消抢购
CS_RUSH_BUY_CANCEL_BID = "Fight/rushBuyUnBid";
---抢购信息变化
SC_RUSH_BUY_SYNC_INFO = "Fight/rushBuySync";
---抢购结果
SC_RUSH_BUY_BID_RESULT = "Fight/rushBuyResult";
---初始化战斗场景
SC_INIT_FIGHT_SCENE = "Fight/initFightScene";
---创建Role
SC_BATTLE_CREATE_ROLES = "Fight/roleCreate";
---更新角色属性
SC_BATTLE_ROLE_UPDATE_PROPS = "Fight/updateRoleProps";
---召唤
SC_BATTLE_SUMMON = "Fight/summon";
---等待区变化
SC_BATTLE_WAIT_CHANGE = "Fight/waitAreaChange";
---请求上阵角色到棋盘
CS_BATTLE_ACTION_UP_ROLE = "Fight/actionUpRoleReq";
---棋盘上阵通知
SC_BATTLE_ACTION_UP_ROLES = "Fight/actionUpRoleRes";
---请求下阵棋盘角色
CS_BATTLE_ACTION_DOWN_ROLE = "Fight/actionDownRoleReq";
---棋盘角色下阵通知
SC_BATTLE_ACTION_DOWN_ROLE = "Fight/actionDownRoleRes";
---棋盘角色位置交换
SC_BATTLE_ACTION_SWAP_PLACE = "Fight/actionSwapPlace";
---请求升级角色
CS_BATTLE_ACTION_LEVELUP_ROLE = "Fight/levelUpRoleReq";
---请求升级角色返回
SC_BATTLE_ACTION_LEVELUP_ROLE = "Fight/levelUpRoleRes";
---请求出售角色
CS_BATTLE_ACTION_SELL_ROLE = "Fight/sellRoleReq";
---出售角色返回
SC_BATTLE_ACTION_SELL_ROLE = "Fight/sellRoleRes";
---购买经验请求
CS_BATTLE_ACTION_BUY_EXP = "Fight/buyExpReq";
---羁绊变化
SC_BATTLE_GROUP_CHANGED = "Fight/groupChangeRes";
---伤害统计
SC_BATTLE_HURT_STATISTICS = "Fight/hurtStatistics";
---获得设置信息
CS_BATTLE_GET_SETTING = "Fight/settingReq";
---同步设置信息
SC_BATTLE_SYNC_SETTING = "Fight/settingRes";
---改变设置信息
CS_BATTLE_CHANGE_SETTING = "Fight/settingChangeReq";
---请求设置阵型
CS_BATTLE_SET_FORMATION = "Fight/setFormation";
---buff变化
SC_BATTLE_SYNC_BUFF_CHANGE = "Fight/buffChange";
---设置玩家的准备状态
CS_BATTLE_SET_BATTLE_READY_STATE = "Fight/setReadyState";
---同步参战玩家的准备状态
SC_BATTLE_SYNC_READY_STATE = "Fight/syncReadyState";
---同步角色特效
SC_BATTLE_SYNC_ROLE_EFFECTS_CHANGE = "Fight/syncEffects";
---触发器执行
SC_BATTLE_TRIGGER_EXECUTE = "Fight/triggerExecute";
---同步战斗角色数据
SC_FIGHT_ROLE_AND_USER_DATA = "Fight/SendUserRoleData";
---投降
CS_FIGHT_SURRENDER = "Fight/surrender";
---请求装备仓库信息
CS_BATTLE_EQUIPWAREHOUSE_GETINFO = "Fight/geteqHouseInfoReq";
---装备仓库增加装备
SC_BATTLE_EQUIPWAREHOUSE_ADDEQUIP = "Fight/houseAddEquip";
---装备仓库移除装备
SC_BATTLE_EQUIPWAREHOUSE_REMOVEEQUIP = "Fight/houseRemoveEquip";
---穿装备
CS_BATTLE_EQUIP_PUTON = "Fight/putOnEquipReq";
---穿装备返回
SC_BATTLE_EQUIP_PUTON = "Fight/putOnEquipRes";
---脱装备
CS_BATTLE_EQUIP_TAKEOFF = "Fight/takeOffEquipReq";
---脱装备返回
SC_BATTLE_EQUIP_TAKEOFF = "Fight/takeOffEquipRes";
---装备信息更新
SC_BATTLE_EQUIP_NOTIFY = "Fight/equipInfoNotify";
---装备信息更新
SC_BATTLE_EQUIP_LVUP = "Fight/equipLvUp";
---创建物品球
SC_BATTLE_CREATE_GOODS_BOX = "Fight/createGoodsBox";
---刷新物品球
CS_BATTLE_REFRESH_GOODS_BOX = "Fight/refreshGoodsBox";
---选择物品球
CS_BATTLE_CHOICE_GOODS_BOX = "Fight/choiceGoodsBox";
---删除物品球
SC_BATTLE_DELETE_GOODS_BOX = "Fight/deleteGoodsBox";
---掉落装备
SC_BATTLE_TREASURE_BOX_DROP = "Fight/treasureDropRes";
---捡起装备
CS_BATTLE_TREASURE_BOX_PICKUP = "Fight/treasurePickReq";
---装备被捡起
SC_BATTLE_TREASURE_BOX_PICKUP = "Fight/treasurePickRes";
---释放技能
SC_USE_SKILL = "Fight/useSkill";
---播放特效
SC_PLAY_EFFECT = "Fight/playEffect";
---受伤
SC_HURT = "Fight/hurt";
---取消技能
SC_CANCLE_SKILL = "Fight/cancelSkill";
---玩家移动
SC_ROLE_MOVE = "Fight/move";
---复活
SC_REVIVE = "Fight/revive";
---棋手移动请求
CS_CHESS_PLAYER_MOVE = "Fight/playerMoveReq";
---棋手移动通知
SC_CHESS_PLAYER_MOVE = "Fight/playerMoveRes";
---观战请求
CS_BATTLE_WATCH_REQ = "Fight/watchReq";
---观战通知
SC_BATTLE_WATCH_RES = "Fight/watchRes";
---同步命令请求
CS_BATTLE_ASYNC_COMMAND = "Fight/syncCommandReq";
---同步命令通知
SC_BATTLE_ASYNC_COMMAND = "Fight/syncCommandRes";
---获得阵型列表
CS_FORMATION_GET = "Formation/getAll";
---选择阵型
CS_FORMATION_SELECT = "Formation/selectReq";
---设置或新增阵型
CS_FORMATION_SET = "Formation/setReq";
---删除阵型
CS_FORMATION_DEL = "Formation/delReq";
---所有物品数据
SC_ALL_ITEM_DATA = "Hall/allItemData";
---所有物品数据
SC_UPDATE_ITEM_DATA = "Hall/updateItemData";
---出售物品
CS_SELL_ITEM = "Hall/sellItem";
---使用物品
CS_USE_ITEM = "Hall/useItem";
---礼包自动打开
SC_AUTO_GIFT = "Hall/autoGift";
---更新段位数据
SC_UPDATE_DUAN_WEI = "Season/updateDuanWei";
---全部赛季信息
CS_UPDATE_SEASON_DATA = "Season/updateSeasondata";
---当前赛季信息
CS_CURRENT_SEASON_DATA = "Season/currentSeasondata";
---更新段位奖励
CS_UPDATE_DUANWEI_REWARD = "Season/updateDuanWeiReward";
---领取段位奖励
CS_RECEIVE_DUANWEI_REWARD = "Season/receiveDuanWeiReward";
---领取赛季奖励
CS_RECEIVE_SEASON_REWARD = "Season/receiveSeasonReward";
---领取賽季所有段位奖励
CS_SEASON_DUANWEI_REWARD = "Season/seasonDuanWeiReward";
---当前赛季所有模式信息
CS_SEASON_PATTERN_INFO = "Season/seasonPatternInfo";
---推送赛季状态
SC_PUSH_SEASON_STATE = "Season/updateSeasonState";
---查询赛季奖励
CS_QUERY_SEASON_REWARD = "Season/querySeasonReward";
---GM请求
CS_GM_REQUEST = "Gm/gmRequest";
---同步好友列表
SC_FRIENDS_SYNC_FRIENDS_LIST = "Friends/syncFriendsList";
---添加好友
CS_FRIENDS_APPLY_ADD_FRIEND = "Friends/addFriend";
---同意好友申请
CS_FRIENDS_AGREE_APPLY = "Friends/agreeFriendApply";
---拒绝好友申请
CS_FRIENDS_REFUSE_APPLY = "Friends/refuseFriendApply";
---删除好友
CS_FRIENDS_DEL_FRIEND = "Friends/delFriend";
---添加到黑名单
CS_FRIENDS_BLACK_FRIEND = "Friends/blackFriend";
---取消黑名单
CS_FRIENDS_UN_BLACK_FRIEND = "Friends/unBlackFriend";
---赠送礼品给好友
CS_FRIENDS_GIVE_FRIEND_GIFT = "Friends/giveFriendGift";
---赠送红心
CS_FRIENDS_GIVE_HEART = "Friends/giveFriendHeart";
---领取红心
CS_FRIENDS_GET_HEART = "Friends/getFriendHeart";
---一键赠领红心
CS_FRIENDS_ONE_BUTTON_GIVE_SEND = "Friends/oneButtonGiveSend";
---查找好友信息
CS_FRIENDS_FIND_FRIEND = "Search/findFriends";
---邀请好友组队
CS_TEAM_INVITE_FRIENDS_TO_TEAM = "Team/inviteFriendsToTeam";
---发送被邀请信息
SC_TEAM_SEND_INVITE_MSG_TO_USER = "Team/inviteToUser";
---回复邀请
CS_TEAM_REPLY_USER_INVITE = "Team/replyInvite";
---同步队伍信息
SC_TEAM_SYNC_TEAM_MSG = "Team/syncTeamMsg";
---新成员进入组队
SC_TEAM_NEWCOMER_ENTER_TEAM = "Team/newcomerEnter";
---把成员踢出组队
CS_TEAM_KICK_MEMBER_USER = "Team/tickUser";
---玩家离开队伍
CS_TEAM_USER_LEAVE_TEAM = "Team/userLeaveTeam";
---玩家离开队伍通知
SC_TEAM_USER_LEAVE_TEAM_NOTICE = "Team/userLeaveTeamNotice";
---玩家设置准备状态
CS_TEAM_SET_READY_STATUS = "Team/userSetReadyStatus";
---玩家准备状态通知
SC_TEAM_USER_READY_STATUS_NOTICE = "Team/userReadyStatusNotice";
---队长设置场次
CS_TEAM_LEADER_SET_MODE = "Team/leaderSetMode";
---模式通知
SC_TEAM_SYNC_MODE_NOTICE = "Team/modeNotice";
---进入到匹配模式
CS_TEAM_ENTER_MATCHING = "Team/enterMatching";
---同步队内所有玩家的准备状态
SC_TEAM_USER_READY_STATUS_NOTICE_ALL_USERS = "Team/syncAllUserReadyStatus";
---队伍进入到匹配状态
SC_TEAM_ENTER_MATCHING_STATUS = "Team/teamEnterMatching";
---取消队伍的匹配状态
SC_TEAM_CANCEL_MATCHING = "Team/cancelTeamMatching";
---发起聊天招募
CS_TEAM_CHAT_RECRUIT = "Team/chatRecruit";
---回复聊天招募
CS_TEAM_REPLY_RECTUIT = "Team/replyRecruit";
---段位排行榜
CS_RANK_GET_DATA = "Rank/onGetRankData";
---推送排行榜信息
SC_RANK_SEND_DATA = "Rank/SendRankData";
---推送是否在棋圣排行榜
SC_RANK_IS_IN_QISHENG = "Rank/SendGetIsInQSRankData";
---请求简略战绩信息
CS_GET_HISTORY_SIMPLE = "Hall/onGetHistorySimple";
---请求详细战绩信息
CS_GET_HISTORY_DETAIL = "Hall/onGetHistoryDetail";
---进入测试环境
SC_FIGHT_TEST_ENTER_TEST_ENVIRONMENT = "FightTest/enterTestEnvironment";
---战斗测试，战斗开始
CS_FIGHT_TEST_START_FIGHT = "Fight/fightTestStartFight";
---战斗测试，停止战斗
CS_FIGHT_TEST_STOP_FIGHT = "Fight/fightTestStopFight";
---战斗测试，添加卡牌
CS_FIGHT_TEST_ADD_CARD = "Fight/fightTestAddCard";
---战斗测试，添加装备
CS_FIGHT_TEST_ADD_EQUIP = "Fight/fightTestAddEquip";
---战斗测试，穿脱装备
CS_FIGHT_TEST_CHANGE_EQUIP = "Fight/fightTestChangeEquip";
---战斗测试，上阵
CS_FIGHT_TEST_UP_ROLE = "Fight/fightTestUpRole";
---战斗测试，售出棋子
CS_FIGHT_TEST_SELL_ROLE = "Fight/fightTestSellRole";
---战斗测试，使用技能
CS_FIGHT_TEST_USE_SKILL = "Fight/fightTestUseSkill";
---战斗测试，更换是否自动使用技能
CS_FIGHT_TEST_CHANGE_AUTO_SKILL = "Fight/fightTestChangeAutoSkill";
---客户端设置临时消息
CS_STORAGE_SET_MESSAGE = "Hall/setMessage";
---客户端请求临时消息
CS_STORAGE_GET_MESSAGE = "Hall/getMessage";
---发送消息
CS_CHAT_SAY = "Chat/say";
---传输信息
SC_CHAT_INFO = "Chat/info";
---发送公告
SC_CHAT_NOTICE = "Chat/notice";
---获取邮件信息
SC_GET_MAIL_INFO = "Mail/onGetMailInfo";
---邮件满了
SC_MAIL_FULL = "Mail/onMailFull";
---邮件已读
CS_MAIL_READ = "Mail/onMailRead";
---删除邮件
CS_DELETE_MAIL = "Mail/onDeleteMail";
---领取邮件附件
CS_RECEIVE_MAIL = "Mail/onReceiveMail";
---添加邮件
SC_ADD_MAIL = "Mail/onAddMail";
---推送删除邮件
SC_DELETE_MAIL_INFO = "Mail/onDeleteMailInfo";
---获取商城信息
CS_MALL_GET_INFO = "Mall/mallGetInfo";
---刷新商城信息
CS_MALL_REFRESH = "Mall/mallRefresh";
---购买商城商品
CS_MALL_BUY = "Mall/mallBuy";
---请求题目
CS_QUESTION_DATA = "Hall/questionRequest";
---请求答题
CS_QUESTION_ANSWER = "Hall/questionAnswer";
---作题领取奖励
CS_QUESTION_REWARD = "Hall/questionReward";
---装扮可用数据
CS_DRESS_USER_CONTAIN = "Hall/onDressContain";
---装扮变更
CS_DRESS_USER_CHANGE = "Hall/onDressChange";
---装扮红点系统通知
SC_DRESS_RED = "Hall/onDressRed";
---同步任务信息
SC_TASK_SYNC_TASK_MSG = "Task/syncTaskMsg";
---领取任务奖励
CS_TASK_GET_REWARD = "Task/getTaskReward";
---同步任务活跃度
SC_TASK_SYNC_TASK_ACTIVITY = "Task/syncTaskActivity";
---日活跃度奖励
SC_TASK_DAY_ACTIVITY_REWARD = "Task/dayActivityReward";
---周活跃度奖励
SC_TASK_WEEK_ACTIVITY_REWARD = "Task/weekActivityReward";
---领取日活跃度奖励
CS_TASK_GET_DAY_ACTIVITY_REAWARD = "Task/getDayActivityReward";
---领取周活跃度奖励
CS_TASK_GET_WEEK_ACTIVITY_REAWARD = "Task/getWeekActivityReward";
---同步成就信息
SC_ACHIEVEMENT_SYNC_ACHIEVEMTN_MSG = "Task/syncAchievementMsg";
sg";
