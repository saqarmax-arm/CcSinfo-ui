import * as CcsinfoAPI from '@/services/ccsinfo-api'

class Misc {
  static info(options = {}) {
    return CcsinfoAPI.get('/info', options)
  }

  static dailyTransactions(options = {}) {
    return CcsinfoAPI.get('/stats/daily-transactions', options)
  }

  static blockInterval(options = {}) {
    return CcsinfoAPI.get('/stats/block-interval', options)
  }

  static coinstake(options = {}) {
    return CcsinfoAPI.get('/stats/coinstake', options)
  }

  static addressGrowth(options = {}) {
    return CcsinfoAPI.get('/stats/address-growth', options)
  }

  static richList({from, to}, options = {}) {
    return CcsinfoAPI.get(`/misc/rich-list`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }

  static biggestMiners({from, to}, options = {}) {
    return CcsinfoAPI.get(`/misc/biggest-miners`, {params: {page: from / (to - from), pageSize: to - from}, ...options})
  }
}

export default Misc
