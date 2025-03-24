"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPOList = getPOList;
exports.getPODetail = getPODetail;
// PO一覧のダミーデータ
const dummyData = [
    { order_no: 1234567, order_date: "2024-12-11", brand_name: "LP Division", sku_count: 16, sent: true },
    { order_no: 1234568, order_date: "2024-12-12", brand_name: "Brand B", sku_count: 10, sent: false },
    { order_no: 1234569, order_date: "2024-12-13", brand_name: "LP Division", sku_count: 8, sent: false },
];
// PO詳細のダミーデータ
const dummyDetailData = [
    {
        sku: 1234567,
        brand_name: "L∞P Division",
        sku_name: "Skidual Men Ski Jacket Insulated 3L",
        sku_count: 16,
        rainbow: {
            composition: [
                { position: "", material: "ポリエステル", ratio: "17%" },
                { position: "表地", material: "ポリエステル", ratio: "17%" },
                { position: "表地", material: "ポリエステル", ratio: "17%" },
            ],
            laundary_mark: "GL01",
        },
    },
    {
        sku: 1234568,
        brand_name: "Brand B",
        sku_name: "Casual Sneakers",
        sku_count: 10,
        rainbow: {
            composition: [
                { position: "表地", material: "コットン", ratio: "50%" },
                { position: "裏地", material: "ラバー", ratio: "50%" },
                { position: "裏地", material: "ラバー", ratio: "50%" },
            ],
            laundary_mark: "GL02",
        },
    },
    {
        sku: 1234569,
        brand_name: "L∞P Division",
        sku_name: "Waterproof Hiking Boots",
        sku_count: 8,
        rainbow: {
            composition: [
                { position: "表地", material: "レザー", ratio: "70%" },
                { position: "裏地", material: "ポリウレタン", ratio: "30%" },
                { position: "裏地", material: "ポリウレタン", ratio: "30%" },
            ],
            laundary_mark: "GL03",
        },
    },
];
// PO一覧取得関数
function getPOList(brandName, includeSent) {
    return dummyData.filter(item => {
        const matchesBrand = brandName === "" || item.brand_name.includes(brandName);
        const includeInResults = includeSent || !item.sent;
        return matchesBrand && includeInResults;
    });
}
// PO詳細取得関数
function getPODetail(orderNo) {
    const dummyDetailData = [
        {
            order_no: 1234567,
            brand_name: "L∞P Division",
            items: [
                {
                    sku: "SKU001",
                    sku_name: "Skidual Men Ski Jacket Insulated 3L",
                    sku_count: 16,
                    rainbow: {
                        composition: [
                            { position: "", material: "ポリエステル", ratio: "17%" },
                            { position: "表地", material: "ポリエステル", ratio: "17%" },
                            { position: "表地", material: "ポリエステル", ratio: "17%" },
                        ],
                        laundary_mark: "GL01",
                    },
                },
            ],
        },
        {
            order_no: 1234568,
            brand_name: "Brand B",
            items: [
                {
                    sku: "SKU003",
                    sku_name: "Casual Sneakers",
                    sku_count: 5, // GAS のレスポンスと合わせる
                    rainbow: {
                        composition: [
                            { position: "表地", material: "コットン", ratio: "50%" },
                            { position: "裏地", material: "ラバー", ratio: "50%" },
                        ],
                        laundary_mark: "GL03", // GAS のレスポンスと合わせる
                    },
                },
            ],
        },
        {
            order_no: 1234569,
            brand_name: "L∞P Division",
            items: [
                {
                    sku: "SKU005",
                    sku_name: "Waterproof Hiking Boots",
                    sku_count: 8,
                    rainbow: {
                        composition: [
                            { position: "表地", material: "レザー", ratio: "70%" },
                            { position: "裏地", material: "ポリウレタン", ratio: "30%" },
                        ],
                        laundary_mark: "GL03",
                    },
                },
            ],
        },
    ];
    // `orderNo` に一致するデータを探す
    const detail = dummyDetailData.find((item) => item.order_no.toString() === orderNo);
    return detail || { error: "注文番号に該当するデータが見つかりません。" };
}
