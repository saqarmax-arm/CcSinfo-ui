import * as CcsinfoAPI from '@/services/ccsinfo-api'

class Address {
  static get(id, options = {}) {
    return CcsinfoAPI.get(`/address/${id}`, options)
  }

  static getBalance(id, options = {}) {
    return CcsinfoAPI.get(`/address/${id}/balance`, options)
  }

  static getUtxo(id, options = {}) {
    return CcsinfoAPI.get(`/address/${id}/utxo`, options)
  }

  static getTransactions(id, {page, pageSize}, options = {}) {
    return CcsinfoAPI.get(`/address/${id}/txs`, {params: {page, pageSize}, ...options})
  }

  static getBalanceTransactions(id, {page, pageSize}, options = {}) {
    return CcsinfoAPI.get(`/address/${id}/balance-history`, {params: {page, pageSize}, ...options})
  }

  static getTokenBalanceTransactions(id, {token, page, pageSize}, options = {}) {
    if (token) {
      return CcsinfoAPI.get(`/address/${id}/qrc20-balance-history/${token}`, {params: {page, pageSize}, ...options})
    } else {
      return CcsinfoAPI.get(`/address/${id}/qrc20-balance-history`, {params: {page, pageSize}, ...options})
    }
  }
}

export default Address
