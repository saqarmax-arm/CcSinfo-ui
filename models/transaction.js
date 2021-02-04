import * as CcsinfoAPI from '@/services/ccsinfo-api'

class Transaction {
  static get(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return CcsinfoAPI.get('/txs/' + id.join(','), options)
      }
    } else {
      return CcsinfoAPI.get(`/tx/${id}`, options)
    }
  }

  static getBrief(id, options = {}) {
    if (Array.isArray(id)) {
      if (id.length === 0) {
        return []
      } else {
        return CcsinfoAPI.get('/txs/' + id.join(','), {params: {brief: ''}, ...options})
      }
    } else {
      return CcsinfoAPI.get(`/tx/${id}`, {params: {brief: ''}, ...options})
    }
  }

  static getRecentTransactions(options = {}) {
    return CcsinfoAPI.get('/recent-txs', options)
  }

  static sendRawTransaction(data, options = {}) {
    return CcsinfoAPI.post('/tx/send', {rawtx: data}, options)
  }
}

export default Transaction
