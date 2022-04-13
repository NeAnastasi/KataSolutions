import {Selector} from 'testcafe'

fixture `Testing e2e`
    .page `http://26.114.34.241:8080`;

test('False_test_result', async t => {
    await t
        .typeText('#arr1', '1 2 3')
        .typeText('#arr2', '1 2 3')
        .click('#check')

        .expect(Selector('#output').textContent).eql('First array: 1,2,3; Second array: 1,2,3; Result: false')
});

test('True_test_result', async t => {
    await t
        .typeText('#arr1', '1 2 3')
        .typeText('#arr2', '1 4 9')
        .click('#check')

        .expect(Selector('#output').textContent).eql('First array: 1,2,3; Second array: 1,4,9; Result: true')
});

test('First_wrong_check', async t => {
    await t
        .typeText('#arr1', 'adf1 2 3')
        .typeText('#arr2', '1 4 9')
        .click('#check')

        .expect(Selector('#message_for_arr1').textContent).eql("Что-то не так со вводом первого массива!")
});

test('Second_wrong_check', async t => {
    await t
        .typeText('#arr1', '1 2 3')
        .typeText('#arr2', 'ывфвф1 4 9')
        .click('#check')

        .expect(Selector('#message_for_arr2').textContent).eql("Что-то не так со вводом второго массива!")
});

test('Clear all', async t => {
    await t
        .click('#clear')

        .expect(Selector('#arr1').textContent).eql('')
        .expect(Selector('#arr2').textContent).eql('')
        .expect(Selector('#output').textContent).eql('')
});