var $ = require('jquery');
import Constants from '../config/constants';

export default {
    login(credentials){
        return $.post(Constants.api.auth, credentials);
    },
    getData(ref, token){
        var url = Constants.api[ref];
        return $.ajax({
            type: 'GET',
            url: url + '?format=json',
            
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }.bind(this),
        });
    },
    addData(url, data, token){
        return $.ajax({
            type: 'POST',
            url: url,
            data: data,
            
            beforeSend: function(xhr) {
                xhr.setRequestHeader('Authorization', 'JWT ' + token);
            }.bind(this),
        });
    },
    addLegalPerson(legalPerson, token){
        return this.addData(Constants.api.legalPersons, legalPerson, token);
    },
    addTicket(ticket, token){
        return this.addData(Constants.api.tickets, ticket, token);
    }
};
