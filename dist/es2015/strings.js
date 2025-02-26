export class Html5QrcodeStrings {
    static codeParseError(exception) {
        return `QR kodu ayrıştırma hatası, hata = ${exception}`;
    }
    static errorGettingUserMedia(error) {
        return `Kullanıcı medyasına erişim hatası, hata = ${error}`;
    }
    static onlyDeviceSupportedError() {
        return "Cihaz navigator.mediaDevices'ı desteklemiyor, bu durumda yalnızca "
            + "desteklenen cameraIdOrConfig, deviceId parametresi (string) olmalıdır.";
    }
    static cameraStreamingNotSupported() {
        return "Tarayıcı tarafından kamera akışı desteklenmiyor.";
    }
    static unableToQuerySupportedDevices() {
        return "Desteklenen cihazlar sorgulanamıyor, bilinmeyen hata.";
    }
    static insecureContextCameraQueryError() {
        return "Kamera erişimi yalnızca https veya localhost gibi güvenli bağlamlarda desteklenir.";
    }
    static scannerPaused() {
        return "Tarayıcı duraklatıldı";
    }
}
export class Html5QrcodeScannerStrings {
    static scanningStatus() {
        return "Taranıyor";
    }
    static idleStatus() {
        return "Boşta";
    }
    static errorStatus() {
        return "Hata";
    }
    static permissionStatus() {
        return "İzin";
    }
    static noCameraFoundErrorStatus() {
        return "Kamera Yok";
    }
    static lastMatch(decodedText) {
        return `Son Eşleşme: ${decodedText}`;
    }
    static codeScannerTitle() {
        return "Kod Tarayıcı";
    }
    static cameraPermissionTitle() {
        return "Kamera İzni Ver";
    }
    static cameraPermissionRequesting() {
        return "Kamera izinleri isteniyor...";
    }
    static noCameraFound() {
        return "Kamera bulunamadı";
    }
    static scanButtonStopScanningText() {
        return "Taramayı Durdur";
    }
    static scanButtonStartScanningText() {
        return "Taramayı Başlat";
    }
    static torchOnButton() {
        return "Feneri Aç";
    }
    static torchOffButton() {
        return "Feneri Kapat";
    }
    static torchOnFailedMessage() {
        return "Fener açılamadı";
    }
    static torchOffFailedMessage() {
        return "Fener kapatılamadı";
    }
    static scanButtonScanningStarting() {
        return "Kamera Başlatılıyor...";
    }
    static textIfCameraScanSelected() {
        return "Bir Resim Dosyası Tara";
    }
    static textIfFileScanSelected() {
        return "Doğrudan Kamerayla Tara";
    }
    static selectCamera() {
        return "Kamera Seç";
    }
    static fileSelectionChooseImage() {
        return "Resim Seç";
    }
    static fileSelectionChooseAnother() {
        return "Başka Birini Seç";
    }
    static fileSelectionNoImageSelected() {
        return "Resim seçilmedi";
    }
    static anonymousCameraPrefix() {
        return "Anonim Kamera";
    }
    static dragAndDropMessage() {
        return "Veya taramak için bir resim bırakın";
    }
    static dragAndDropMessageOnlyImages() {
        return "Veya taramak için bir resim bırakın (diğer dosyalar desteklenmiyor)";
    }
    static zoom() {
        return "zoom";
    }
    static loadingImage() {
        return "Resim yükleniyor...";
    }
    static cameraScanAltText() {
        return "Kamera tabanlı tarama";
    }
    static fileScanAltText() {
        return "Dosya tabanlı tarama";
    }
}
export class LibraryInfoStrings {
    static poweredBy() {
        return "Güçlendiren: ";
    }
    static reportIssues() {
        return "Sorunları bildir";
    }
}
//# sourceMappingURL=strings.js.map