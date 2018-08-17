import { AsyncStorage } from 'react-native';
import React, { Component } from 'react';

export const apiCaller = ((url, method, headers, bodyData, callBack) => {
    AsyncStorage.getItem('access_token').then((value) => {
        let options = { method: method, };
        value != null ? headers['access_token'] = value : null;
        headers != null ? options['headers'] = headers : null;
        bodyData != null ? options['body'] = bodyData : null;
        fetch(url,
            options)
            .then(response => response.json())
            .then(response => {
                callBack(response);
            })
            .catch((error) => {
                callBack(error);
            })
    })

})
