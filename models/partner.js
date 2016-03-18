/**
 * Created by Stacjonarny on 2016-03-15.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var partnerSchema = new Schema({
        name: String,
        description: String,
        imgSrc: String
    },
    {collection: 'partners'});

mongoose.model('partner',partnerSchema);