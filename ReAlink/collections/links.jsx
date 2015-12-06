/* global LinksSchema */
/* global Links */
/* global SimpleSchema */
/* global Mongo */

Links = new Mongo.Collection("links");

LinksSchema = new SimpleSchema({
    title: {
        type: String,
        min: 3,
        trim: true,
        regEx: /^[a-z ,.'-]+$/i
    },
    body: {
        type: String,
        min: 10,
        trim: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        decimal: true
    },
    color: {
        type: String,
        optional: true
    },
    tags: {
        type: [String]
    },
    createdAt: Schemas.createdAt,
    updatedAt: Schemas.updatedAt,
    createdBy: Schemas.createdBy
});

LinksSchema.labels({
    title: 'Link title',
    body: 'Link body',
    rating: 'Link Rating',
    color: 'Link  Color',
    tags: 'Link Tags',
    createdAt: 'Created On',
    updatedAt: 'Updated On'
});

Links.attachSchema(LinksSchema);
Links.helpers({
    detailPath: function () {
        return '/link/' + this._id;
    },
    editPath: function () {
        return '/editLink/' + this._id;
    }
});
Links.allow({
    insert: function (userId, link) {
        return userId && link && userId === link.createdBy;
    },
    update: function (userId, link) {
        return userId && link && userId === link.createdBy;;
    },
    remove: function (userId, link) {
        return userId && link && userId === link.createdBy;
    }
});
