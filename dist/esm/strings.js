var Html5QrcodeStrings = (function () {
    function Html5QrcodeStrings() {
    }
    Html5QrcodeStrings.codeParseError = function (exception) {
        return "QR kodu ayr\u0131\u015Ft\u0131rma hatas\u0131, hata = ".concat(exception);
    };
    Html5QrcodeStrings.errorGettingUserMedia = function (error) {
        return "Kullan\u0131c\u0131 medyas\u0131na eri\u015Fim hatas\u0131, hata = ".concat(error);
    };
    Html5QrcodeStrings.onlyDeviceSupportedError = function () {
        return "Cihaz navigator.mediaDevices'ı desteklemiyor, bu durumda yalnızca "
            + "desteklenen cameraIdOrConfig, deviceId parametresi (string) olmalıdır.";
    };
    Html5QrcodeStrings.cameraStreamingNotSupported = function () {
        return "Tarayıcı tarafından kamera akışı desteklenmiyor.";
    };
    Html5QrcodeStrings.unableToQuerySupportedDevices = function () {
        return "Desteklenen cihazlar sorgulanamıyor, bilinmeyen hata.";
    };
    Html5QrcodeStrings.insecureContextCameraQueryError = function () {
        return "Kamera erişimi yalnızca https veya localhost gibi güvenli bağlamlarda desteklenir.";
    };
    Html5QrcodeStrings.scannerPaused = function () {
        return "Tarayıcı duraklatıldı";
    };
    return Html5QrcodeStrings;
}());
export { Html5QrcodeStrings };
var Html5QrcodeScannerStrings = (function () {
    function Html5QrcodeScannerStrings() {
    }
    Html5QrcodeScannerStrings.scanningStatus = function () {
        return "Taranıyor";
    };
    Html5QrcodeScannerStrings.idleStatus = function () {
        return "Boşta";
    };
    Html5QrcodeScannerStrings.errorStatus = function () {
        return "Hata";
    };
    Html5QrcodeScannerStrings.permissionStatus = function () {
        return "İzin";
    };
    Html5QrcodeScannerStrings.noCameraFoundErrorStatus = function () {
        return "Kamera Yok";
    };
    Html5QrcodeScannerStrings.lastMatch = function (decodedText) {
        return "Son E\u015Fle\u015Fme: ".concat(decodedText);
    };
    Html5QrcodeScannerStrings.codeScannerTitle = function () {
        return "Kod Tarayıcı";
    };
    Html5QrcodeScannerStrings.cameraPermissionTitle = function () {
        return "Kamera İzinleri İsteği";
    };
    Html5QrcodeScannerStrings.cameraPermissionRequesting = function () {
        return "Kamera izinleri isteniyor...";
    };
    Html5QrcodeScannerStrings.noCameraFound = function () {
        return "Kamera bulunamadı";
    };
    Html5QrcodeScannerStrings.scanButtonStopScanningText = function () {
        return "Taramayı Durdur";
    };
    Html5QrcodeScannerStrings.scanButtonStartScanningText = function () {
        return "Taramayı Başlat";
    };
    Html5QrcodeScannerStrings.torchOnButton = function () {
        return "Feneri Aç";
    };
    Html5QrcodeScannerStrings.torchOffButton = function () {
        return "Feneri Kapat";
    };
    Html5QrcodeScannerStrings.torchOnFailedMessage = function () {
        return "Fener açılamadı";
    };
    Html5QrcodeScannerStrings.torchOffFailedMessage = function () {
        return "Fener kapatılamadı";
    };
    Html5QrcodeScannerStrings.scanButtonScanningStarting = function () {
        return "Kamera Başlatılıyor...";
    };
    Html5QrcodeScannerStrings.textIfCameraScanSelected = function () {
        return "Bir Resim Dosyası Tara";
    };
    Html5QrcodeScannerStrings.textIfFileScanSelected = function () {
        return "Doğrudan Kamerayla Tara";
    };
    Html5QrcodeScannerStrings.selectCamera = function () {
        return "Kamera Seç";
    };
    Html5QrcodeScannerStrings.fileSelectionChooseImage = function () {
        return "Resim Seç";
    };
    Html5QrcodeScannerStrings.fileSelectionChooseAnother = function () {
        return "Başka Birini Seç";
    };
    Html5QrcodeScannerStrings.fileSelectionNoImageSelected = function () {
        return "Resim seçilmedi";
    };
    Html5QrcodeScannerStrings.anonymousCameraPrefix = function () {
        return "Anonim Kamera";
    };
    Html5QrcodeScannerStrings.dragAndDropMessage = function () {
        return "Veya taramak için bir resim bırakın";
    };
    Html5QrcodeScannerStrings.dragAndDropMessageOnlyImages = function () {
        return "Veya taramak için bir resim bırakın (diğer dosyalar desteklenmiyor)";
    };
    Html5QrcodeScannerStrings.zoom = function () {
        return "zoom";
    };
    Html5QrcodeScannerStrings.loadingImage = function () {
        return "Resim yükleniyor...";
    };
    Html5QrcodeScannerStrings.cameraScanAltText = function () {
        return "Kamera tabanlı tarama";
    };
    Html5QrcodeScannerStrings.fileScanAltText = function () {
        return "Dosya tabanlı tarama";
    };
    return Html5QrcodeScannerStrings;
}());
export { Html5QrcodeScannerStrings };
var LibraryInfoStrings = (function () {
    function LibraryInfoStrings() {
    }
    LibraryInfoStrings.poweredBy = function () {
        return "Güçlendiren: ";
    };
    LibraryInfoStrings.reportIssues = function () {
        return "Sorunları bildir";
    };
    return LibraryInfoStrings;
}());
export { LibraryInfoStrings };
//# sourceMappingURL=strings.js.map